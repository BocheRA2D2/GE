import fs from 'fs';
let content = fs.readFileSync('src/js/data.js', 'utf8');

const needs = {
    's3_b1': ['oral_dawanie'],
    's3_f1': ['oral_dawanie'], 's3_f2': ['oral_dawanie'], 's3_f3': ['oral_dawanie'],
    's3_f4': ['oral_dawanie'], 's3_f5': ['oral_dawanie'], 's3_f6': ['oral_dawanie'],
    's3_f7': ['oral_dawanie'], 's3_f8': ['oral_dawanie'], 's3_f9': ['oral_dawanie'],
    's3_f10': ['oral_dawanie'], 's3_f11': ['oral_dawanie'], 's3_f12': ['oral_dawanie'],
    's3_f13': ['oral_dawanie'], 's3_f14': ['oral_dawanie'], 's3_f15': ['oral_dawanie'],
    's3_m1': ['palcowka'], 's3_m2': ['oral_dawanie'], 's3_m3': ['palcowka'],
    's3_m4': ['oral_dawanie'], 's3_m5': ['oral_dawanie'], 's3_m6': ['oral_dawanie'],
    's3_m7': ['oral_dawanie'], 's3_m8': ['oral_dawanie', 'palcowka'],
    's3_m9': ['oral_dawanie'], 's3_m10': ['palcowka'],
    's3_m11': ['oral_dawanie'], 's3_m12': ['oral_dawanie'], 's3_m13': ['palcowka'],
    's3_m14': ['palcowka'], 's3_m15': ['oral_dawanie'],
    's4_f1': ['stosunek'], 's4_f2': ['stosunek'], 's4_f3': ['stosunek'],
    's4_f4': ['stosunek'], 's4_f5': ['stosunek'], 's4_f6': ['stosunek'],
    's4_f7': ['stosunek'], 's4_f8': ['stosunek'], 's4_f9': ['stosunek'],
    's4_f10': ['stosunek'], 's4_f11': ['stosunek'], 's4_f12': ['stosunek'],
    's4_f13': ['stosunek'], 's4_f14': ['stosunek'], 's4_f15': ['stosunek'],
    's4_m1': ['stosunek'], 's4_m2': ['stosunek'], 's4_m3': ['stosunek'],
    's4_m4': ['stosunek'], 's4_m5': ['stosunek'], 's4_m6': ['stosunek'],
    's4_m7': ['stosunek'], 's4_m8': ['stosunek', 'noszenie'],
    's4_m9': ['stosunek'], 's4_m10': ['stosunek', 'patrzenie_oczy'],
    's4_m11': ['stosunek'], 's4_m12': ['stosunek'], 's4_m13': ['stosunek'],
    's4_m14': ['stosunek', 'patrzenie_oczy'], 's4_m15': ['stosunek', 'ciagnięcie_wlosow'],
    's5_twarz_3': ['oral_dawanie'], 's5_usta_1': ['oral_dawanie'],
    's5_usta_2': ['oral_dawanie'], 's5_usta_3': ['oral_dawanie'],
    's5_pupa_2': ['stosunek'], 's5_nogi_2': ['stosunek'],
    's5_chusteczka_1': ['stosunek'], 's5_piersi_1': ['oral_dawanie'],
};

let count = 0;
for (const [id, acts] of Object.entries(needs)) {
    const actsStr = "requiresActivities: [" + acts.map(a => "'" + a + "'").join(", ") + "]";
    const idEsc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Check if already has requiresActivities
    const hasRe = new RegExp("(id: '" + idEsc + "'[\\s\\S]*?)requiresActivities: \\[[^\\]]*\\]");
    if (hasRe.test(content)) {
        content = content.replace(hasRe, "$1" + actsStr);
        count++;
    } else {
        // Add before gender line  
        const addRe = new RegExp("(id: '" + idEsc + "'[\\s\\S]*?)(    gender:)");
        if (addRe.test(content)) {
            content = content.replace(addRe, "$1    " + actsStr + ",\n$2");
            count++;
        } else {
            console.log('NOT FOUND: ' + id);
        }
    }
}

fs.writeFileSync('src/js/data.js', content, 'utf8');
console.log('Updated ' + count + ' tasks');
