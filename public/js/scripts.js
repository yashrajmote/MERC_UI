

document.getElementById('preset1').addEventListener('click', function() {
    fillForm({
        AGEN: 300,
        AAPC: 15,
        ARCC: 136258.84,
        AWCC: 31042.3,
        AICC: 54540.25,
        ALDOC: 0,
        AFOC: 145.2,
        ARGCVB: 3742, 
        AWGCVB: 3387, 
        AIGCVB: 0, 
        ARGCVR: 3041, 
        AWGCVR: 4075, 
        AIGCVR: 4701, 
        LDOGCV: 10657, 
        FOGCV: 10593, 
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
        FGMOS: 0
    });
});

document.getElementById('preset2').addEventListener('click', function() {
    fillForm({
        AGEN: 300,
        AAPC: 15,
        ARCC: 136258.84,
        AWCC: 31042.3,
        AICC: 54540.25,
        ALDOC: 0,
        AFOC: 145.2,
        ARGCVB: 0, 
        AWGCVB: 0, 
        AIGCVB: 0, 
        ARGCVR: 0, 
        AWGCVR: 0, 
        AIGCVR: 0, 
        LDOGCV: 0, 
        FOGCV: 0, 
        ACGCV: 0, 
        ARCLC: 0, 
        AWCLC: 0, 
        AICLC: 0, 
        ALDOLC: 0, 
        AFOLC: 0, 
        ARCCC: 0, 
        AWCCC: 0, 
        AICCC: 0, 
        OVC: 0, 
        ATL: 0,
        ATLC: 0.32,
        AMTBF: 0, 
        ARR: 0, 
        APAVF: 0, 
        FGMOS: 0
    });
});

document.getElementById('preset3').addEventListener('click', function() {
    fillForm({
        AGEN: 300,
        AAPC: 15,
        ARCC: 136258.84,
        AWCC: 31042.3,
        AICC: 54540.25,
        ALDOC: 0,
        AFOC: 145.2,
        ARGCVB: 0, 
        AWGCVB: 0, 
        AIGCVB: 0, 
        ARGCVR: 0, 
        AWGCVR: 0, 
        AIGCVR: 0, 
        LDOGCV: 0, 
        FOGCV: 0, 
        ACGCV: 0, 
        ARCLC: 0, 
        AWCLC: 0, 
        AICLC: 0, 
        ALDOLC: 0, 
        AFOLC: 0, 
        ARCCC: 0, 
        AWCCC: 0, 
        AICCC: 0, 
        OVC: 0, 
        ATL: 0,
        ATLC: 0.32,
        AMTBF: 0, 
        ARR: 0, 
        APAVF: 0, 
        FGMOS: 0
    });
});


function fillForm(data) {
    for (const key in data) {
        const input = document.querySelector(`input[name="${key}"]`);
        if (input) {
            input.value = data[key];
        }
    }
}





// Function to process the form data and calculate all variables
function processFormData(formData) {

    // -------> 31 inputs <---------

    const keys = [
        'AGEN', 'AAPC', 'ARGCVB', 'AWGCVB', 'AIGCVB', 'ARGCVR', 'AWGCVR', 'AIGCVR',
        'LDOGCV', 'FOGCV', 'ACGCV', 'ARCLC', 'AWCLC', 'AICLC', 'ALDOLC', 'AFOLC',
        'ARCC', 'AWCC', 'AICC', 'ALDOC', 'AFOC', 'OVC', 'ATL', 'ATLC', 'AMTBF', 
        'ARR', 'APAVF', 'FGMOS'
    ];

    // Object to store parsed values
    let parsedValues = {};

    // Iterate over keys array and populate parsedValues object
    keys.forEach(key => {
        parsedValues[key] = parseFloat(formData.get(key));
    });

    // Destructure parsedValues to individual variables for easier reference
    let { AGEN, AAPC, ARGCVB, AWGCVB, AIGCVB, ARGCVR, AWGCVR, AIGCVR, 
        LDOGCV, FOGCV, ACGCV, ARCLC, AWCLC, AICLC, ALDOLC, AFOLC,
        ARCC, AWCC, AICC, ALDOC, AFOC, OVC, ATL, ATLC, AMTBF, ARR, 
        APAVF, FGMOS } = parsedValues;

    // -------> 11 same as inputs <---------

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

    // -------> <---------


       
    // Reference values from a separate sheet or provided inputs
    const NAPC_PERCENT = 8; // Example value, replace with actual reference
    const NADLURGCV = 500; // Example value, replace with actual reference
    const NADLUWGCV = 500; // Example value, replace with actual reference
    const NSHR = 2300; // Example value, replace with actual reference
    const NSL = 100; // Example value, replace with actual reference
    const NFC = 1000; // Example value, replace with actual reference
    const NFCEWC = 800; // Example value, replace with actual reference
    const ROE = 10; // Example value, replace with actual reference
    const TDFY = 365; // Example value, replace with actual reference
    const NTL = 2; // Example value, replace with actual reference
    const ROERP = (ROE * TDR) / TDFY; // Calculated value for ROERP
    const ROEMTBF = createLookupTable(parsedValues['MTBF']); // Replace with actual lookup table function
    const ROERR = createLookupTable(parsedValues['RampRate']); // Replace with actual lookup table function
    const ROEPAVF = createLookupTable(parsedValues['PeakAVF']); // Replace with actual lookup table function
    const ROEFGMO = createLookupTable(parsedValues['FGMO']); // Replace with actual lookup table function

    // ------->  Derived Formulas  <---------

    const MTBFGain = ROEMTBF * ROERP; //a
    const RampRateGain = ROERR * ROERP; //b
    const PeakAVFGain = ROEPAVF * ROERP; //c
    const FGMOGain = ROEFGMO * ROERP; //d
    const APCGainLoss = ((parsedValues['NAPC'] - AAPC) * parsedValues['APCR']) / 10;
    const SFOCGainLoss = parsedValues['NLDOCC'] + parsedValues['NFOCC'] - parsedValues['ALDOCC'] - parsedValues['AFOCC'];
    const TLGainLoss = ((parsedValues['ARCCC'] * parsedValues['ARCC']) / (1 - parsedValues['NTL'] / 10000000)) - ((parsedValues['ARCCC'] * parsedValues['ARCC']) / 10000000) - parsedValues['ATLC'];

    // Add calculated values to parsedValues
    Object.assign(parsedValues, {
        ROERP, ROEMTBF, ROERR, ROEPAVF, ROEFGMO,
        MTBFGain, RampRateGain, PeakAVFGain, FGMOGain,
        APCGainLoss, SFOCGainLoss, TLGainLoss
    });

    return parsedValues;
}

// Example function to create lookup table values based on input
function createLookupTable(value) {
    // Replace with actual logic to fetch or compute lookup table values
    // For simplicity, returning a static value here
    return 10; // Example static value; replace with actual logic
}




document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Do something with the response data, like displaying it on the page
    })
    .catch((error) => {
        console.error('Error:', error);
    });


    // Perform calculations (replace with your actual calculation logic)
    const calculatedValues = {
        ASL: 0.00,
        ASRCC: 2619.43,
        APSL: 5.00,
        ASFOC: 0.48,
        ATLC: 0.78,
        NMTBF: 56,
        NRAMP_RATE: 0.5,
        NPEAK_AVF: 86,
        NFGMO_STATUS: inputData.FGMOS
        // Add more calculations as needed based on inputData
    };

    // Function to generate report based on calculated values
    function generateReport(calculatedValues) {
        // Gain/Loss Report Parameters
        const gainLossReport = [
            { srNo: 1, parameter: 'Availability Factor', unit: '%', normativeValue: 85, achieved: calculatedValues.ASL, commercialGainLoss: -30.9214 },
            { srNo: 2, parameter: 'Heat Rate', unit: 'kcal/kwh', normativeValue: 2430, achieved: calculatedValues.ASRCC, commercialGainLoss: -11.1262 },
            { srNo: 3, parameter: 'Auxiliary Power Consumption', unit: '%', normativeValue: 8.5, achieved: calculatedValues.APSL, commercialGainLoss: 5.2682 },
            { srNo: 4, parameter: 'Specific Oil Consumption', unit: 'ml/kwh', normativeValue: 0.5, achieved: calculatedValues.ASFOC, commercialGainLoss: 0.0486 },
            { srNo: 5, parameter: 'Transit Loss', unit: '%', normativeValue: 0.8, achieved: calculatedValues.ATLC, commercialGainLoss: 0.0786 }
        ];

        // Incentive Gains Report Parameters
        const incentiveGainsReport = [
            { srNo: 6, parameter: 'MTBF', unit: 'days', normativeValue: 'min. 45', achieved: calculatedValues.NMTBF, commercialGainLoss: 0.0252 },
            { srNo: 7, parameter: 'Ramp rate above 1%', unit: '%/min', normativeValue: 'above 1% ramp rate', achieved: calculatedValues.NRAMP_RATE, commercialGainLoss: 0.0252 },
            { srNo: 8, parameter: 'Peak AVF', unit: '%', normativeValue: 'min. 75%', achieved: calculatedValues.NPEAK_AVF, commercialGainLoss: 0.0252 },
            { srNo: 9, parameter: 'FGMO status', unit: '-', normativeValue: 'In service', achieved: calculatedValues.NFGMO_STATUS === 'y' ? 'Yes' : 'No', commercialGainLoss: 0.0629 }
        ];

        // Total values
        const totalGainLoss = gainLossReport.reduce((total, item) => total + item.commercialGainLoss, 0);
        const totalIncentiveGains = incentiveGainsReport.reduce((total, item) => total + item.commercialGainLoss, 0);
        const netGainLoss = totalGainLoss + totalIncentiveGains;

        // Format the report
        const formattedReport = `
Gain/ Loss Report as per Norms
Sr. no.\tParameter\tUnit\tNormative value\tAchieved\tCommercial Gain/ Loss (Rs. Crores)
${gainLossReport.map(item => `${item.srNo}\t${item.parameter}\t${item.unit}\t${item.normativeValue}\t${item.achieved}\t${item.commercialGainLoss.toFixed(4)}`).join('\n')}
Total\t\t\t\t\t\t\t${totalGainLoss.toFixed(4)}

Incentive Gains Report as per Regulations
Sr. no.\tParameter\tUnit\tNormative value\tAchieved\tCommercial Gain/ Loss (Rs. Crores)
${incentiveGainsReport.map(item => `${item.srNo}\t${item.parameter}\t${item.unit}\t${item.normativeValue}\t${item.achieved}\t${item.commercialGainLoss.toFixed(4)}`).join('\n')}
Total\t\t\t\t\t\t\t${totalIncentiveGains.toFixed(4)}

Net Gain/ Loss\t\t\t\t\t\t\t${netGainLoss.toFixed(4)}
`;

        return formattedReport;
    }

    // Generate report
    const report = generateReport(calculatedValues);

    // Display the report in the UI
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.textContent = report;

    // Show the report container
    const reportContainer = document.getElementById('reportContainer');
    reportContainer.classList.remove('hidden');
});



function generateReport() {
    // Gain/Loss Report Data
    const gainLossData = [
        { srNo: 1, parameter: 'Availability Factor', unit: '%', normativeValue: 85, achieved: 0.00, gainLoss: -30.9214 },
        { srNo: 2, parameter: 'Heat Rate', unit: 'kcal/kwh', normativeValue: 2430, achieved: 2619.43, gainLoss: -11.1262 },
        { srNo: 3, parameter: 'Auxiliary Power Consumption', unit: '%', normativeValue: 8.5, achieved: 5.00, gainLoss: 5.2682 },
        { srNo: 4, parameter: 'Specific Oil Consumption', unit: 'ml/kwh', normativeValue: 0.5, achieved: 0.48, gainLoss: 0.0486 },
        { srNo: 5, parameter: 'Transit Loss', unit: '%', normativeValue: 0.8, achieved: 0.78, gainLoss: 0.0786 }
    ];

    // Incentive Gains Report Data
    const incentiveGainsData = [
        { srNo: 6, parameter: 'MTBF', unit: 'days', minNormativeValue: 45, achieved: 56, gain: 0.0252 },
        { srNo: 7, parameter: 'Ramp rate above 1%', unit: '%/min', description: 'above 1% ramp rate', achieved: 0.5, gain: 0.0252 },
        { srNo: 8, parameter: 'Peak AVF', unit: '%', minNormativeValue: 75, achieved: 86, gain: 0.0252 },
        { srNo: 9, parameter: 'FGMO status', unit: '-', description: 'In service', achieved: 'y', gain: 0.0629 }
    ];

    // Net Gain/Loss
    const netGainLoss = -36.5137;

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

// Event listener for form submission
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Call function to generate report
    generateReport();
});
