import { chromium } from 'playwright';
import fs from 'fs';

const logFile = 'test-log.txt';
fs.writeFileSync(logFile, 'Test started...\n');
function log(msg) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + '\n');
}

(async () => {
    log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    log('Navigating to http://localhost:3000/...');
    await page.goto('http://localhost:3000/');
    await page.screenshot({ path: 'step0_start.png' });

    log('Filling names...');
    await page.fill('#female-name', 'Anna');
    await page.fill('#male-name', 'Piotr');
    await page.screenshot({ path: 'step1_names.png' });
    await page.click('#btn-start');
    log('Clicked start');

    const safeClick = async (selector, timeout = 1000) => {
        try {
            await page.waitForSelector(selector, { timeout });
            await page.click(selector);
            return true;
        } catch (e) {
            return false;
        }
    };

    // Handoffs and setup
    await safeClick('#btn-handoff-confirm', 5000);
    await page.screenshot({ path: 'step2_handoff.png' });

    await page.waitForSelector('.check-item', { timeout: 5000 });
    await page.click('.check-item:first-child');
    await page.click('#btn-clothing-next');

    await page.waitForSelector('.check-item', { timeout: 5000 });
    await page.click('.check-item:first-child');
    await page.click('#btn-activities-next');

    await page.fill('#wish-text', 'Kwiaty');
    await page.click('#btn-wish-next');
    log('Passed female setup');

    await safeClick('#btn-handoff-confirm', 5000);
    await page.screenshot({ path: 'step3_handoff_male.png' });

    await page.waitForSelector('.check-item', { timeout: 5000 });
    await page.click('.check-item:first-child');
    await page.click('#btn-clothing-next');

    await page.waitForSelector('.check-item', { timeout: 5000 });
    await page.click('.check-item:first-child');
    await page.click('#btn-activities-next');

    await page.fill('#wish-text', 'Piwo');
    await page.click('#btn-wish-next');
    log('Passed male setup');

    await page.waitForSelector('.length-option[data-value="short"]', { timeout: 5000 });
    await page.click('.length-option[data-value="short"]');
    await page.click('#btn-length-next');
    await safeClick('#btn-acc-skip', 5000);
    log('Passed options');

    // Game Loop (test 2 tasks only for speed)
    for (let i = 0; i < 2; i++) {
        try {
            log(`STARA: Task ${i + 1} - Waiting for draw...`);
            await page.waitForSelector('#btn-draw', { timeout: 15000 });
            await page.screenshot({ path: `task${i + 1} _0_ready.png` });

            log(`Clicking draw...`);
            await page.click('#btn-draw');

            log(`Waiting for rolling...`);
            await page.waitForTimeout(2500);
            await page.screenshot({ path: `task${i + 1} _1_rolled.png` });

            log(`Clicking modifier...`);
            await safeClick('#btn-no-mod', 5000);
            await page.waitForTimeout(1000);
            await page.screenshot({ path: `task${i + 1} _2_reveal.png` });

            const isTimer = await safeClick('#btn-start-timer', 1000);
            if (isTimer) {
                log(`Timer started.Waiting for completion...`);
                await page.waitForSelector('.result-completed', { timeout: 150000 });
            } else {
                log(`Clicking done...`);
                await safeClick('#btn-task-done', 5000);
                await page.waitForSelector('.result-completed', { timeout: 15000 });
            }

            log(`Task ${i + 1} finished.Clicking result...`);
            await page.screenshot({ path: `task${i + 1} _3_result.png` });
            await page.click('.result-completed');
            await page.waitForTimeout(2000);
        } catch (e) {
            log(`FAILED at task ${i + 1}: ${e.message} `);
            fs.writeFileSync('error-html.txt', await page.innerHTML('body').catch(() => 'No body'));
            await page.screenshot({ path: 'debug-screenshot.png' });
            await browser.close();
            process.exit(1);
        }
    }

    log('SUCCESS: GAME_TEST_PASSED_2_TASKS');
    await browser.close();
    process.exit(0);
})();
