document.getElementById('preset1').addEventListener('click', function() {
    fillForm({
        // NORMATIVE/REGULATORY VALUES
        IC: 840,
        NAVF: 80,
        NSHR: 2630,
        NAPC: 9.7,
        NSFOC: 0.5,
        NTL: 0.8,
        NSL: 120,
        NFC: 543.56,
        NFCEWC: 538.98,
        ROE: 150,
        NADLURGCV: 600,
        NADLUWGCV: 300,
        // NORMATIVE/REGULATORY VALUES
        AGEN: 300,
        AAPC: 15,
        ARCC: 136258.84,
        AWCC: 31042.3,
        AICC: 54540.25,
        ALDOC: 0,
        AFOC: 145.2,
        ARGCVB: 3742, 
        AWGCVB: 3387, 
        AIGCVB: 2, 
        ARGCVR: 3041, 
        AWGCVR: 4075, 
        AIGCVR: 4701, 
        ALDOGCV: 10657, 
        AFOGCV: 10593, 
        ACGCV: 2927, 
        ARCLC: 3717, 
        AWCLC: 4621.63, 
        AICLC: 4621.63, 
        ALDOLC: 49015.35, 
        AFOLC: 39047.69, 
        ARCCC: 3607.00, 
        AWCCC: 4534.95, 
        AICCC: 16127.44, 
        OVC: 19229430.98, 
        ATL: 0.78,
        ATLC: 0.32,
        AMTBF: 56, 
        ARR: 0.5, 
        APAVF: 86, 
        FGMOS: 0,
        PDCTDR: 1,
        OPDCTDR: 2, 
        ADCTDR: 3, 
        PDCHDS: 4,
        OPDCHDS: 5, 
        ADCHDS: 6,
        PDCLDS: 7,
        OPDCLDS: 8,
        ADCLDS: 9 
    });
});

document.getElementById('preset2').addEventListener('click', function() {
    fillForm({
        // NORMATIVE/REGULATORY VALUES
        IC: 500,
        NAVF: 85,
        NSHR: 2375,
        NAPC: 6,
        NSFOC: 0.5,
        NTL: 0.8,
        NSL: 120,
        NFC: 543.56,
        NFCEWC: 538.98,
        ROE: 150,
        NADLURGCV: 600,
        NADLUWGCV: 300,
        // NORMATIVE/REGULATORY VALUES
        AGEN: 300,
        AAPC: 15,
        ARCC: 136258.84,
        AWCC: 31042.3,
        AICC: 54540.25,
        ALDOC: 7,
        AFOC: 145.2,
        ARGCVB: 1, 
        AWGCVB: 2, 
        AIGCVB: 3, 
        ARGCVR: 4, 
        AWGCVR: 5, 
        AIGCVR: 6, 
        ALDOGCV: 7, 
        AFOGCV: 8, 
        ACGCV: 9, 
        ARCLC: 1, 
        AWCLC: 2, 
        AICLC: 3, 
        ALDOLC: 4, 
        AFOLC: 5, 
        ARCCC: 6, 
        AWCCC: 7, 
        AICCC: 8, 
        OVC: 9, 
        ATL: 1,
        ATLC: 0.32,
        AMTBF: 2, 
        ARR: 3, 
        APAVF: 4, 
        FGMOS: 1,
        PDCTDR: 1,
        OPDCTDR: 2, 
        ADCTDR: 3, 
        PDCHDS: 4,
        OPDCHDS: 5, 
        ADCHDS: 6,
        PDCLDS: 7,
        OPDCLDS: 8,
        ADCLDS: 9 
    });
});

document.getElementById('preset3').addEventListener('click', function() {
    fillForm({
        // NORMATIVE/REGULATORY VALUES
        IC: 210,
        NAVF: 80,
        NSHR: 2787,
        NAPC: 10.96,
        NSFOC: 1.4,
        NTL: 0.8,
        NSL: 120,
        NFC: 177.83,
        NFCEWC: 166.57,
        ROE: 13.64,
        NADLURGCV: 600,
        NADLUWGCV: 300,
        // NORMATIVE/REGULATORY VALUES
        AGEN: 300,
        AAPC: 15,
        ARCC: 136258.84,
        AWCC: 31042.3,
        AICC: 54540.25,
        ALDOC: 0,
        AFOC: 145.2,
        ARGCVB: 1, 
        AWGCVB: 2, 
        AIGCVB: 3, 
        ARGCVR: 4, 
        AWGCVR: 5, 
        AIGCVR: 6, 
        ALDOGCV: 7, 
        AFOGCV: 8, 
        ACGCV: 9,
        ARCLC: 1, 
        AWCLC: 2, 
        AICLC: 3, 
        ALDOLC: 4, 
        AFOLC: 5, 
        ARCCC: 6, 
        AWCCC: 7, 
        AICCC: 8, 
        OVC: 8, 
        ATL: 9,
        ATLC: 0.32,
        AMTBF: 1, 
        ARR: 2, 
        APAVF: 3, 
        FGMOS: 4,
        PDCTDR: 5,
        OPDCTDR: 2, 
        ADCTDR: 3, 
        PDCHDS: 4,
        OPDCHDS: 5, 
        ADCHDS: 6,
        PDCLDS: 7,
        OPDCLDS: 8,
        ADCLDS: 9
    });
});

function convertToPercentage(percentageValues){
    return percentageValues.map(value => value / 100);
}

function FGMOstatus(){
    const checkbox = document.getElementById('FGMO')

    if(checkbox.checked){
        return 1.25 / 100
    } else {
        return 0;
    }
}

function setTDR() { 

    const startDateInput = document.getElementById('start-date').value;
    const endDateInput = document.getElementById('end-date').value;

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    const differenceInMillis = endDate - startDate;

    const differenceInDays = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

function initializeConstants() {
    const TDR = setTDR();
    const TDFY = calculateTDFY();
    return { TDR, TDFY };
}

function calculateTDFY() {
    const today = new Date();
    
    let startYear, endYear;
    if (today.getMonth() + 1 >= 4) { 
        startYear = today.getFullYear();
        endYear = startYear + 1;
    } else {
        endYear = today.getFullYear();
        startYear = endYear - 1;
    }
    
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const financialYearIncludesLeapDay = isLeapYear(endYear);

    const TDFY = financialYearIncludesLeapDay ? 366 : 365;
    
    return TDFY;
}


function parseFormData(formData) {
    const keys = [
        'AGEN', 'AAPC', 'ARGCVB', 'AWGCVB', 'AIGCVB', 'ARGCVR', 'AWGCVR', 'AIGCVR',
        'ALDOGCV', 'AFOGCV', 'ACGCV', 'ARCLC', 'AWCLC', 'AICLC', 'ALDOLC', 'AFOLC', 'ARCCC',
        'ARCC', 'AWCC', 'AICC', 'ALDOC', 'AFOC', 'OVC', 'ATL', 'ATLC', 'AMTBF', 
        'ARR', 'APAVF', 'FGMOS', 'AWCCC', 'AICCC', 'PDCTDR', 'OPDCTDR', 'ADCTDR', 'PDCHDS',
        'OPDCHDS', 'ADCHDS', 'PDCLDS', 'OPDCLDS', 'ADCLDS', 'IC', 'NAVF', 'NSHR', 'NAPC', 'NSFOC', 
        'NTL', 'NSL', 'NFC', 'NFCEWC', 'ROE', 'NADLURGCV', 'NADLUWGCV'
    ];

    let parsedValues = {};
    keys.forEach(key => {
        parsedValues[key] = parseFloat(formData.get(key));
    });

    const APGEN = parsedValues['AGEN'];
    const NRGCVB = parsedValues['ARGCVB'];
    const NWGCVB = parsedValues['AWGCVB'];
    const NIGCVB = parsedValues['AIGCVB'];
    const NIGCVR = parsedValues['AIGCVR'];
    const NLDOGCV = parsedValues['ALDOGCV'];
    const NFOGCV = parsedValues['AFOGCV'];
    const NWCLC = parsedValues['AWCLC'];
    const NICLC = parsedValues['AICLC'];
    const NLDOLC = parsedValues['ALDOLC'];
    const NFOLC = parsedValues['AFOLC'];

    parsedValues['APGEN'] = APGEN;
    parsedValues['NRGCVB'] = NRGCVB;
    parsedValues['NWGCVB'] = NWGCVB;
    parsedValues['NIGCVB'] = NIGCVB;
    parsedValues['NIGCVR'] = NIGCVR;
    parsedValues['NLDOGCV'] = NLDOGCV;
    parsedValues['NFOGCV'] = NFOGCV;
    parsedValues['NWCLC'] = NWCLC;
    parsedValues['NICLC'] = NICLC;
    parsedValues['NLDOLC'] = NLDOLC;
    parsedValues['NFOLC'] = NFOLC;

    return parsedValues;
}

function calculateROEValues(parsedValues, TDR, TDFY) {
    const { ROE, AMTBF, APAVF, ARR } = parsedValues;

    const ROE_RP = (ROE * TDR) / TDFY;
    let ROE_MTBF = (AMTBF >= 1 && AMTBF <= 44) ? 0 :  
                 (AMTBF >= 45 && AMTBF <= 89) ? 0.5 :
                 (AMTBF >= 90 && AMTBF <= 119) ? 0.75 :
                 (AMTBF >= 120 && AMTBF <= 500) ? 1 : 0;

    let ROE_PAVF = (APAVF >= 0 && APAVF <= 74) ? 0 : 
                 (APAVF >= 75 && APAVF <= 84) ? 0.25 :
                 (APAVF >= 85 && APAVF <= 89) ? 0.5 :
                 (APAVF >= 90 && APAVF <= 100) ? 1 : 0;

    let ROE_RR = (ARR >= 0 && ARR <= 0.24) ? 0 : 
               (ARR >= 0.25 && ARR <= 0.49) ? 0.25 :
               (ARR >= 0.5 && ARR <= 0.74) ? 0.5 :
               (ARR >= 0.75 && ARR <= 0.99) ? 0.75 :
               (ARR >= 1 && ARR <= 1.24) ? 1 :
               (ARR === 1.25) ? 1.25 : 0;

    let percentageValues = [ROE_MTBF, ROE_PAVF, ROE_RR];
    const [converted_ROE_MTBF, converted_ROE_PAVF, converted_ROE_RR] = convertToPercentage(percentageValues);

    return { ROE_RP, converted_ROE_MTBF, converted_ROE_PAVF, converted_ROE_RR };
}
function calculations(parsedValues, TDR, TDFY) {
    const { IC, AGEN, NAVF, NSHR, NAPC, AWCC, ACGCV, ALDOC, ALDOLC, NSFOC, ARCC, AICCC, AFOGCV, AWGCVR, 
        AIGCVR, ARGCVB, OPDCTDR, NADLURGCV, ARGCVR, AIGCVB, NADLUWGCV, ARCCC, ATLC, NTL, OVC, AFOC, AFOLC, APGEN, NRGCVB, 
        NWGCVB, NIGCVB, NIGCVR, NFCEWC, NLDOGCV, NFOGCV, PDCTDR, NWCLC, NICLC, NLDOLC, NFOLC, NSL, AAPC } = parsedValues;

    const NTHCF = AGEN * NSHR;
    const NAPCM = AGEN * (NAPC / 100);
    const AHCWC = (AWCC * ACGCV) / 1000;
    const NLDOC = 1; // NSLDOC * AGEN;
    const NHCLDO = (NLDOC * NLDOGCV * 0.853) / 1000;
    const NFOC = NSFOC * AGEN;
    const NHCFO = (NFOC * NFOGCV * 0.933) / 1000;
    const AHCRC = (ARCC * ACGCV) / 1000;
    const AHCIC = (AICCC * ACGCV) / 1000;
    const NHCWC = AHCWC * (NTHCF - NHCLDO - NHCFO) / (AHCRC + AHCWC + AHCIC);
    const NHCIC = AHCIC * (NTHCF - NHCLDO - NHCFO) / (AHCRC + AHCWC + AHCIC);
    const NHCRC = NTHCF - (NHCWC + NHCIC + NHCLDO + NHCFO);

    const NRGCVR = (ARGCVB - ARGCVR > NADLURGCV) ? (ARGCVB - NADLURGCV) : ARGCVR;
    const NWGCVR = (NWGCVB - AWGCVR > NADLUWGCV) ? (NWGCVB - NADLUWGCV) : AWGCVR;
    const ASL = [(ARCC * ARGCVR) + (AWCC * AWGCVR) + (AICCC * AIGCVR) / (ARCC + AWCC + AICCC)] - ACGCV;
    const APSL = Math.min(NSL, ASL);
    const NCGCV = [(ARCC * NRGCVR) + (AWCC * NWGCVR) + (AICCC * NIGCVR) / (ARCC + AWCC + AICCC)] - APSL;
    const NRCC = (NHCRC / NCGCV) * 1000;
    const NRCLC = (NRCC === 0) ? 0 : (ARCC / (1 - (NTL / 100))) + (OVC / (ARCC + AWCC + AICCC));
    const NRCCC = NRCC * (NRCLC / 10 ** 7);


    const NWCC = NHCWC / NCGCV * 1000;
    const NWCCC = NWCC * NWCLC / 10 ** 7;
    const NICC = NHCIC / NCGCV * 1000;
    const NICCC = NICC * NICLC / 10 ** 7;
    const NLDOCC = NLDOC * NLDOLC / 10 ** 7;
    const NFOCC = NFOC * NFOLC / 10 ** 7;
    const TNFCC = NRCCC + NWCCC + NICCC + NLDOCC + NFOCC;
    const APECR = TNFCC / ((AGEN - AAPC) * 10);
    const ALDOCC = ALDOC * ALDOLC / 10 ** 7;
    const AFOCC = AFOC * AFOLC / 10 ** 7;

    const ECTDR = IC * ( 1 - NAPC ) * TDR;
    const OPAVFTDR = 100 * OPDCTDR / ECTDR;
    const MPROPAVFTDR = 0.8 * NFCEWC * TDR / TDFY;

    const AROPAVFTDR = (OPAVFTDR >= NAVF) ? MPROPAVFTDR : (0.8 * 85 * OPAVFTDR * NFCEWC * TDR / TDFY);

    const MPRPAVFTDR = 0.2 * NFCEWC * TDR / TDFY;
    const PAVFTDR = 100 * PDCTDR / ECTDR
    const ARPAVFTDR = (PAVFTDR >= NAVF) ? MPRPAVFTDR : (0.2 * 85 * PAVFTDR * NFCEWC * TDR / TDFY);
    const ARAAVFTDR = ARPAVFTDR + AROPAVFTDR;
    const MPRAAVFTDR = MPRPAVFTDR + MPROPAVFTDR;

    return { NTHCF, NAPCM, AHCWC, NLDOC, NHCLDO, NFOC, NHCFO, AHCRC, AHCIC, NHCWC, NHCIC, NHCRC, NRGCVR, 
        NWGCVR, ASL, APSL, NCGCV, NRCC, NRCCC, NRCLC, NWCC, NWCCC, NICC, NICCC, NLDOCC, NFOCC, TNFCC, APECR, ALDOCC, AFOCC, ARAAVFTDR, MPRAAVFTDR };
}

function calculateGainValues(parsedValues, afterCalculations, ROEValues) {
    const { ROE_RP, converted_ROE_MTBF, converted_ROE_RR, converted_ROE_PAVF } = ROEValues;
    const { NAPCM, APECR, NLDOCC, NFOCC, ALDOCC, AFOCC, NRCCC, NWCCC, NICCC, ARAAVFTDR, MPRAAVFTDR } = afterCalculations;
    const { AAPC, AICCC, AWCCC, ARCCC, ARCC, ATLC, NTL } = parsedValues;


    const ROE_FGMO = FGMOstatus();

    const gainMTBF = converted_ROE_MTBF * ROE_RP;
    const gainRampRate = converted_ROE_RR * ROE_RP;
    const gainPeakAVF = converted_ROE_PAVF * ROE_RP;
    const gainFGMO = ROE_FGMO * ROE_RP;
    const gainAPC = ((NAPCM - AAPC) * APECR) / 10;
    const gainSFOC = NLDOCC + NFOCC - ALDOCC - AFOCC;
    const gainTL = ((ARCCC * ARCC) / (1 - NTL)) - ((ARCCC * ARCC) / 10 ** 7) - ATLC;
    const gainNSHR = ARCCC + AWCCC + AICCC - NRCCC - NWCCC - NICCC - gainTL;
    const gainAVF = ARAAVFTDR - MPRAAVFTDR;

    return { gainMTBF, gainRampRate, gainPeakAVF, gainFGMO, gainAPC, gainSFOC, gainTL, gainNSHR, gainAVF };
}

function fillForm(data) {
    for (const key in data) {
        const input = document.querySelector(`input[name="${key}"]`);
        if (input) {
            input.value = data[key];
        }
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const TDR = setTDR();
    console.log(TDR);

    const TDFY = calculateTDFY();
    console.log(TDFY);

    const formData = new FormData(event.target);
    console.log(formData); 

    const parsedValues = parseFormData(formData);
    console.log(parsedValues); 

    const ROEValues = calculateROEValues(parsedValues, TDR, TDFY);
    console.log(ROEValues); 

    const afterCalculations = calculations(parsedValues, TDR, TDFY);
    console.log(afterCalculations); 

    const gainValues = calculateGainValues(parsedValues, afterCalculations, ROEValues)
    console.log(gainValues);

    generateReport(gainValues, afterCalculations, ROEValues, parsedValues);

}

document.getElementById('inputForm').addEventListener('submit', handleSubmit);


function generateReport(gainValues, afterCalculations, ROEValues, parsedValues) {

    const { gainMTBF, gainRampRate, gainPeakAVF, gainFGMO, gainAPC, gainSFOC, gainTL, gainNSHR, gainAVF } = gainValues;

    const { NTHCF, NAPCM, AHCWC, NLDOC, NHCLDO, NFOC, NHCFO, AHCRC, AHCIC, NHCWC, NHCIC, NHCRC, NRGCVR, 
        NWGCVR, ASL, APSL, NCGCV, NRCC, NRCCC, NRCLC, NWCC, NWCCC, NICC, NICCC, NLDOCC, NFOCC, TNFCC, 
        APECR, ALDOCC, AFOCC, ARAAVFTDR, MPRAAVFTDR  } = afterCalculations;

    const { ROE_RP, converted_ROE_MTBF, converted_ROE_PAVF, converted_ROE_RR } = ROEValues;

    const { AGEN, AAPC, ARGCVB, AWGCVB, AIGCVB, ARGCVR, AWGCVR, AIGCVR, ALDOGCV, AFOGCV, ACGCV, ARCLC, AWCLC, AICLC, 
        ALDOLC, AFOLC, ARCCC, ARCC, AWCC, AICC, ALDOC, AFOC, OVC, ATL, ATLC, AMTBF, ARR, APAVF, FGMOS, AWCCC, AICCC, 
        PDCTDR, OPDCTDR, ADCTDR, PDCHDS, OPDCHDS, ADCHDS, PDCLDS, OPDCLDS, ADCLDS, IC, NAVF, NSHR, NAPC, NSFOC, NTL, 
        NSL, NFC, NFCEWC, ROE, NADLURGCV, NADLUWGCV
    } = parsedValues;        

    // Gain/Loss Report Data
    const gainLossData = [
        { srNo: 1, parameter: 'Availability Factor', unit: '%', normativeValue: 85, achieved: 0.00, gainLoss: gainAVF },
        { srNo: 2, parameter: 'Heat Rate', unit: 'kcal/kwh', normativeValue: NSHR, achieved: 2619.43, gainLoss: gainNSHR },
        { srNo: 3, parameter: 'Auxiliary Power Consumption', unit: '%', normativeValue: NAPCM, achieved: 5.00, gainLoss: gainAPC },
        { srNo: 4, parameter: 'Specific Oil Consumption', unit: 'ml/kwh', normativeValue: 0.5, achieved: 0.48, gainLoss: gainSFOC },
        { srNo: 5, parameter: 'Transit Loss', unit: '%', normativeValue: NTL, achieved: ATL, gainLoss: gainTL }
    ];

    // Incentive Gains Report Data
    const incentiveGainsData = [
        { srNo: 6, parameter: 'MTBF', unit: 'days', minNormativeValue: 45, achieved: AMTBF, gain: gainMTBF },
        { srNo: 7, parameter: 'Ramp rate above 1%', unit: '%/min', description: 'above 1% ramp rate', achieved: ARR, gain: gainRampRate },
        { srNo: 8, parameter: 'Peak AVF', unit: '%', minNormativeValue: 75, achieved: APAVF, gain: gainPeakAVF },
        { srNo: 9, parameter: 'FGMO status', unit: '-', description: 'In service', achieved: 'y', gain: gainFGMO }
    ];

    // Net Gain/Loss
    const netGainLoss = gainMTBF + gainRampRate + gainPeakAVF + gainFGMO + gainAPC + gainSFOC + gainTL + gainNSHR + gainAVF;

    // Constructing Gain/Loss Report HTML
    let gainLossHTML = `
        <h2 class="text-lg font-semibold">Gain/ Loss Report as per Norms</h2>
        <table class="mt-4 w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2">#</th>
                    <th class="border border-gray-300 px-4 py-2">Parameter</th>
                    <th class="border border-gray-300 px-4 py-2">Unit</th>
                    <th class="border border-gray-300 px-4 py-2">Normative value</th>
                    <th class="border border-gray-300 px-4 py-2">Achieved</th>
                    <th class="border border-gray-300 px-4 py-2">Commercial Gain/ Loss (Crores)</th>
                </tr>
            </thead>
            <tbody>
    `;

    gainLossData.forEach(item => {
        gainLossHTML += `
            <tr>
                <td class="border border-gray-300 px-4 py-2">${item.srNo}</td>
                <td class="border border-gray-300 px-4 py-2">${item.parameter}</td>
                <td class="border border-gray-300 px-4 py-2">${item.unit}</td>
                <td class="border border-gray-300 px-4 py-2">${item.normativeValue}</td>
                <td class="border border-gray-300 px-4 py-2">${item.achieved}</td>
                <td class="border border-gray-300 px-4 py-2">${item.gainLoss}</td>
            </tr>
        `;
    });

    gainLossHTML += `
            <tr>
                <td colspan="5" class="border border-gray-300 px-4 py-2 text-right font-semibold">Total</td>
                <td class="border border-gray-300 px-4 py-2 font-semibold">${netGainLoss.toFixed(4)}</td>
            </tr>
        </tbody>
    </table>
    `;

    // Constructing Incentive Gains Report HTML
    let incentiveGainsHTML = `
        <h2 class="text-lg font-semibold mt-8">Incentive Gains Report as per Regulations</h2>
        <table class="mt-4 w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2">#</th>
                    <th class="border border-gray-300 px-4 py-2">Parameter</th>
                    <th class="border border-gray-300 px-4 py-2">Unit</th>
                    <th class="border border-gray-300 px-4 py-2">Achieved</th>
                    <th class="border border-gray-300 px-4 py-2">Gain</th>
                </tr>
            </thead>
            <tbody>
    `;

    incentiveGainsData.forEach(item => {
        incentiveGainsHTML += `
            <tr>
                <td class="border border-gray-300 px-4 py-2">${item.srNo}</td>
                <td class="border border-gray-300 px-4 py-2">${item.parameter}</td>
                <td class="border border-gray-300 px-4 py-2">${item.unit}</td>
                <td class="border border-gray-300 px-4 py-2">${item.achieved}</td>
                <td class="border border-gray-300 px-4 py-2">${item.gain}</td>
            </tr>
        `;
    });

    incentiveGainsHTML += `
            <tr>
                <td colspan="4" class="border border-gray-300 px-4 py-2 text-right font-semibold">Total</td>
                <td class="border border-gray-300 px-4 py-2 font-semibold">0.1384</td>
            </tr>
        </tbody>
    </table>
    `;

    // Net Gain/Loss
    let netGainLossHTML = `
        <h2 class="text-lg font-semibold mt-8">Net Gain/ Loss</h2>
        <p class="mt-4">Net Gain/ Loss: <span class="font-semibold">${netGainLoss.toFixed(4)}</span></p>
    `;

    // Outputting to the report container
    const reportContainer = document.getElementById('reportContainer');
    reportContainer.classList.remove('hidden');

    const reportOutput = document.getElementById('reportOutput');
    reportOutput.innerHTML = gainLossHTML + incentiveGainsHTML;
}

