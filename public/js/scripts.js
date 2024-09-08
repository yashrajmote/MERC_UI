const selectKPKD = document.querySelectorAll('select')[2]; 
selectKPKD.addEventListener('change', function() {
    if (this.value === 'preset1') {
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
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927, 
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607.00, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.3177,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 0,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0 
        });
    }
});

const selectKPKD2 = document.querySelectorAll('select')[2]; 
selectKPKD2.addEventListener('change', function() {
    if (this.value === 'preset2') {
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
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927, 
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229431, 
            ATL: 0.78,
            ATLC: 0.3177,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0 
        });
    }
});

const selectBSL = document.querySelectorAll('select')[0]; 
selectBSL.addEventListener('change', function() {
    if (this.value === 'preset3') {
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
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectBSL2 = document.querySelectorAll('select')[0]; 
selectBSL2.addEventListener('change', function() {
    if (this.value === 'preset4') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 1000,
            NAVF: 85,
            NSHR: 2375,
            NAPC: 6,
            NSFOC: 0.5,
            NTL: 0.8,
            NSL: 120,
            NFC: 1045.6,
            NFCEWC: 1042.46,
            ROE: 194.07,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectCSTPS = document.querySelectorAll('select')[1]; 
selectCSTPS.addEventListener('change', function() {
    if (this.value === 'preset5') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 1920,
            NAVF: 80,
            NSHR: 2688,
            NAPC: 7.8,
            NSFOC: 1,
            NTL: 0.8,
            NSL: 120,
            NFC: 1134.32,
            NFCEWC: 1123.35,
            ROE: 161.54,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectCSTPS2 = document.querySelectorAll('select')[1]; 
selectCSTPS2.addEventListener('change', function() {
    if (this.value === 'preset6') {    fillForm({
                // NORMATIVE/REGULATORY VALUES
                IC: 1000,
                NAVF: 85,
                NSHR: 2375,
                NAPC: 6,
                NSFOC: 0.5,
                NTL: 0.8,
                NSL: 120,
                NFC: 1228.24,
                NFCEWC: 1222.56,
                ROE: 198.9,
                NADLURGCV: 600,
                NADLUWGCV: 300,
                // NORMATIVE/REGULATORY VALUES
                AGEN: 300,
                AAPCM: 15,
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
                ALDOGCV: 10657, 
                AFOGCV: 10593, 
                ACGCV: 2927,
                ARCLC: 3717, 
                AWCLC: 4621.63, 
                AICLC: 16214.12, 
                ALDOLC: 49015.35, 
                AFOLC: 39047.69, 
                IRCCC: 3607, 
                IWCCC: 4534.95, 
                IICCC: 16127.44, 
                OVC: 19229430.98, 
                ATL: 0.78,
                ATLC: 0.32,
                AMTBF: 56, 
                ARR: 0.5, 
                APAVF: 86, 
                FGMOS: 1,
                PDCTDR: 0,
                OPDCTDR: 0, 
                ADCTDR: 0, 
                PDCHDS: 0,
                OPDCHDS: 0, 
                ADCHDS: 0,
                PDCLDS: 0,
                OPDCLDS: 0,
                ADCLDS: 0
        });
    }
});

const selectKTPS = document.querySelectorAll('select')[3]; 
selectKTPS.addEventListener('change', function() {
    if (this.value === 'preset7') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 210,
            NAVF: 72,
            NSHR: 2350,
            NAPC: 10.81,
            NSFOC: 2.81,
            NTL: 0.8,
            NSL: 120,
            NFC: 308.26,
            NFCEWC: 269.53,
            ROE: 41.97,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectKTPS2 = document.querySelectorAll('select')[3]; 
selectKTPS2.addEventListener('change', function() {
    if (this.value === 'preset8') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 1980,
            NAVF: 85,
            NSHR: 2230,
            NAPC: 6,
            NSFOC: 0.5,
            NTL: 0.8,
            NSL: 120,
            NFC: 1970.52,
            NFCEWC: 1888.72,
            ROE: 456.47,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectNTPS = document.querySelectorAll('select')[4]; 
selectNTPS.addEventListener('change', function() {
    if (this.value === 'preset9') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 630,
            NAVF: 80,
            NSHR: 2754,
            NAPC: 10.75,
            NSFOC: 1,
            NTL: 0.8,
            NSL: 120,
            NFC: 492.58,
            NFCEWC: 478.93,
            ROE: 36.7,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectPARAS = document.querySelectorAll('select')[5]; 
selectPARAS.addEventListener('change', function() {
    if (this.value === 'preset10') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 500,
            NAVF: 85,
            NSHR: 2430,
            NAPC: 9.3,
            NSFOC: 0.5,
            NTL: 0.8,
            NSL: 120,
            NFC: 482.26,
            NFCEWC: 468.64,
            ROE: 136.22,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectPARALI = document.querySelectorAll('select')[6]; 
selectPARALI.addEventListener('change', function() {
    if (this.value === 'preset11') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 500,
            NAVF: 85,
            NSHR: 2430,
            NAPC: 9.3,
            NSFOC: 0.5,
            NTL: 0.8,
            NSL: 120,
            NFC: 562.63,
            NFCEWC: 558.35,
            ROE: 143.88,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectPARALI2 = document.querySelectorAll('select')[6]; 
selectPARALI2.addEventListener('change', function() {
    if (this.value === 'preset12') {    fillForm({
            // NORMATIVE/REGULATORY VALUES
            IC: 250,
            NAVF: 85,
            NSHR: 2430,
            NAPC: 8.5,
            NSFOC: 0.5,
            NTL: 0.8,
            NSL: 120,
            NFC: 384.66,
            NFCEWC: 376.21,
            ROE: 61.24,
            NADLURGCV: 600,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 300,
            AAPCM: 15,
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
            ALDOGCV: 10657, 
            AFOGCV: 10593, 
            ACGCV: 2927,
            ARCLC: 3717, 
            AWCLC: 4621.63, 
            AICLC: 16214.12, 
            ALDOLC: 49015.35, 
            AFOLC: 39047.69, 
            IRCCC: 3607, 
            IWCCC: 4534.95, 
            IICCC: 16127.44, 
            OVC: 19229430.98, 
            ATL: 0.78,
            ATLC: 0.32,
            AMTBF: 56, 
            ARR: 0.5, 
            APAVF: 86, 
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0, 
            ADCTDR: 0, 
            PDCHDS: 0,
            OPDCHDS: 0, 
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
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
    
    return {TDFY, startYear, endYear};
}

function updateHeadingWithFinancialYear() {
    const { startYear, endYear } = calculateTDFY();

    const regulatoryHeading = document.getElementById('regulations');
    regulatoryHeading.textContent = `Regulatory Parameters Approved by Commission for (${startYear}-${endYear}) fiscal year`;
}

window.onload = updateHeadingWithFinancialYear;


function parseFormData(formData) {
    const keys = [
        'AGEN', 'AAPCM', 'ARGCVB', 'AWGCVB', 'AIGCVB', 'ARGCVR', 'AWGCVR', 'AIGCVR',
        'ALDOGCV', 'AFOGCV', 'ACGCV', 'ARCLC', 'AWCLC', 'AICLC', 'ALDOLC', 'AFOLC',
        'ARCC', 'AWCC', 'AICC', 'ALDOC', 'AFOC', 'OVC', 'ATL', 'ATLC', 'AMTBF', 
        'ARR', 'APAVF', 'FGMOS', 'PDCTDR', 'OPDCTDR', 'ADCTDR', 'PDCHDS',
        'OPDCHDS', 'ADCHDS', 'PDCLDS', 'OPDCLDS', 'ADCLDS', 'IC', 'NAVF', 'NSHR', 'NAPC', 'NSFOC', 
        'NTL', 'NSL', 'NFC', 'NFCEWC', 'ROE', 'NADLURGCV', 'NADLUWGCV', 'IRCCC', 'IWCCC', 'IICCC'
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
    const { IC, AICC, AGEN, NAVF, NSHR, NAPC, AWCC, ACGCV, ALDOC, ALDOLC, NSFOC, ARCC, AFOGCV, AWGCVR, 
        AIGCVR, ARGCVB, OPDCTDR, NADLURGCV, ARGCVR, AIGCVB, NADLUWGCV, ATLC, NTL, OVC, AFOC, AFOLC, APGEN, NRGCVB, 
        NWGCVB, NIGCVB, NIGCVR, NFCEWC, NLDOGCV, NFOGCV, PDCTDR, NWCLC, NICLC, NLDOLC, NFOLC, NSL, AAPCM, ADCTDR, ALDOGCV, 
        ARCLC, AWCLC, AICLC, IRCCC } = parsedValues;

    const AWCCC = ( AWCC * AWCLC ) / 10 ** 7;
    const AICCC = ( AICC * AICLC ) / 10 ** 7;
    const ARCCC = ( ARCC * ARCLC ) / 10 ** 7;
    const AAPC = ( AAPCM / AGEN ) * 100;
    const NTHCF = AGEN * NSHR;
    const NAPCM = AGEN * (NAPC / 100);
    const AHCWC = (AWCC * ACGCV) / 1000;
    const NSLDOC = 0.2 * NSFOC;
    const NSFFOC = 0.8 * NSFOC;
    const NLDOC = NSLDOC * AGEN; // NSLDOC * AGEN;
    const NHCLDO = (NLDOC * NLDOGCV * 0.853) / 1000;
    const NFOC = NSFFOC * AGEN;
    const NHCFO = (NFOC * NFOGCV * 0.933) / 1000;
    const AHCRC = (ARCC * ACGCV) / 1000;
    const AHCIC = (AICC * ACGCV) / 1000;
    const NHCWC = AHCWC * (NTHCF - NHCLDO - NHCFO) / (AHCRC + AHCWC + AHCIC);
    const NHCIC = AHCIC * (NTHCF - NHCLDO - NHCFO) / (AHCRC + AHCWC + AHCIC);
    const NHCRC = NTHCF - (NHCWC + NHCIC + NHCLDO + NHCFO);

    const NRGCVR = (ARGCVB - ARGCVR > NADLURGCV) ? (ARGCVB - NADLURGCV) : ARGCVR;
    const NWGCVR = (NWGCVB - AWGCVR > NADLUWGCV) ? (NWGCVB - NADLUWGCV) : AWGCVR;
    const ASL = (((ARCC * ARGCVR) + (AWCC * AWGCVR) + (AICC * AIGCVR)) / (ARCC + AWCC + AICC)) - ACGCV;
    const APSL = Math.min(NSL, ASL);
    const NCGCV = (((ARCC * NRGCVR) + (AWCC * NWGCVR) + (AICC * NIGCVR)) / (ARCC + AWCC + AICC)) - APSL;
    const NRCC = (NHCRC / NCGCV) * 1000;
    const NRCLC = (NRCC === 0) ? 0 : (IRCCC / (1 - (NTL / 100))) + (OVC / (ARCC + AWCC + AICC));
    const NRCCC = ( NRCC * NRCLC ) / 10 ** 7;


    const NWCC = NHCWC / NCGCV * 1000;
    const NWCCC = ( NWCC * NWCLC ) / 10 ** 7;
    const NICC = NHCIC / NCGCV * 1000;
    const NICCC = ( NICC * NICLC ) / 10 ** 7;
    const NLDOCC = ( NLDOC * NLDOLC ) / 10 ** 7;
    const NFOCC = ( NFOC * NFOLC ) / 10 ** 7;
    const TNFCC = NRCCC + NWCCC + NICCC + NLDOCC + NFOCC;
    const APECR = (TNFCC / (AGEN - AAPCM)) * 10;
    const ALDOCC = ALDOC * ALDOLC / 10 ** 7;
    const AFOCC = AFOC * AFOLC / 10 ** 7;
    const AHCLDO = ALDOC * ALDOGCV * 0.853 / 1000;
    const AHCFO = AFOC * AFOGCV * 0.933 / 1000;
    const ATHCF = AHCRC + AHCWC + AHCIC + AHCLDO + AHCFO;
    const ASHR = ATHCF / AGEN;
    const ASLDOC = ALDOC / AGEN;
    const ASFOC = AFOC / AGEN;
    const ACSFOC = ASLDOC + ASFOC;


    const ECTDR = IC * ( 1 - NAPC ) * TDR;
    const AAVFTDR = 100  * ( ADCTDR / ECTDR );
    const OPAVFTDR = 100 * ( OPDCTDR / ECTDR );
    const MPROPAVFTDR = 0.8 * NFCEWC * TDR / TDFY;

    const AROPAVFTDR = (OPAVFTDR >= NAVF) ? MPROPAVFTDR : (0.8 * 85 * OPAVFTDR * NFCEWC * TDR / TDFY);

    const MPRPAVFTDR = 0.2 * NFCEWC * TDR / TDFY;
    const PAVFTDR = 100 * PDCTDR / ECTDR
    const ARPAVFTDR = (PAVFTDR >= NAVF) ? MPRPAVFTDR : (0.2 * 85 * PAVFTDR * NFCEWC * TDR / TDFY);
    const ARAAVFTDR = ARPAVFTDR + AROPAVFTDR;
    const MPRAAVFTDR = MPRPAVFTDR + MPROPAVFTDR;

    return { NTHCF, NAPCM, AHCWC, NLDOC, NHCLDO, NFOC, NHCFO, AHCRC, AHCIC, NHCWC, NHCIC, NHCRC, NRGCVR, 
             NWGCVR, ASL, APSL, NCGCV, NRCC, NRCCC, NRCLC, NWCC, NWCCC, NICC, NICCC, NLDOCC, NFOCC, TNFCC, APECR, 
             ALDOCC, AFOCC, ARAAVFTDR, MPRAAVFTDR, AAPC, AAVFTDR, ASHR, ASFOC, NTL, ARCCC, AICCC, AWCCC, AAPCM };
}

function calculateGainValues(parsedValues, afterCalculations, ROEValues) {
    const { ROE_RP, converted_ROE_MTBF, converted_ROE_RR, converted_ROE_PAVF } = ROEValues;
    const { NAPCM, APECR, NLDOCC, NFOCC, ALDOCC, AFOCC, NRCCC, NWCCC, NICCC, ARAAVFTDR, MPRAAVFTDR, AAPCM, AICCC, AWCCC, ARCCC } = afterCalculations;
    const { ARCC, ATLC, NTL, IRCCC, IWCCC, IICCC } = parsedValues;


    const ROE_FGMO = FGMOstatus();

    const gainMTBF = converted_ROE_MTBF * ROE_RP;
    const gainRampRate = converted_ROE_RR * ROE_RP;
    const gainPeakAVF = converted_ROE_PAVF * ROE_RP;
    const gainFGMO = ROE_FGMO * ROE_RP;
    const gainAPC = ((NAPCM - AAPCM) * APECR) / 10;
    const gainSFOC = NLDOCC + NFOCC - ALDOCC - AFOCC;
    const gainTL = ((((IRCCC * ARCC) / (1 - (NTL / 100))) - (IRCCC * ARCC)) / 10 ** 7) - ATLC;
    const gainNSHR = NRCCC + NWCCC + NICCC - ARCCC - AWCCC - AICCC - gainTL;
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

    const {TDFY, startYear, endYear} = calculateTDFY();
    console.log(TDFY, startYear, endYear);

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

    const selectElement = document.querySelector('select'); 
    if (selectElement) {
        updateSelectedLabel(selectElement);
    }

    const reportData = {
        TDR,
        TDFY,
        startYear,
        endYear,
        parsedValues,
        ROEValues,
        afterCalculations,
        gainValues, 
        selectElement
    };


    localStorage.setItem('reportData', JSON.stringify(reportData));
    
    window.location.href = 'output.html';
    

}

function updateSelectedLabel(selectElement) {
    const selectedLabel = selectElement.options[selectElement.selectedIndex].text; 
    localStorage.setItem('selectedLabel', JSON.stringify(selectedLabel));
}

function generateReport(gainValues, afterCalculations, ROEValues, parsedValues) {

const { gainMTBF, gainRampRate, gainPeakAVF, gainFGMO, gainAPC, gainSFOC, gainTL, gainNSHR, gainAVF } = gainValues;

const { AAPC, AAVFTDR, ASHR, ASFOC } = afterCalculations;

const { ATL, ATLC, AMTBF, ARR, APAVF, NAVF, NSHR, NAPC, NSFOC, NTL } = parsedValues;        

// Gain/Loss Report Data
const gainLossData = [
{ srNo: 1, parameter: 'Availability Factor', unit: '%', normativeValue: NAVF, achieved: AAVFTDR, gainLoss: gainAVF.toFixed(3)  },
{ srNo: 2, parameter: 'Heat Rate', unit: 'kcal/kwh', normativeValue: NSHR, achieved: ASHR.toFixed(3) , gainLoss: gainNSHR.toFixed(3)  },
{ srNo: 3, parameter: 'Auxiliary Power Consumption', unit: '%', normativeValue: NAPC, achieved: AAPC, gainLoss: gainAPC.toFixed(3)  },
{ srNo: 4, parameter: 'Specific Oil Consumption', unit: 'ml/kwh', normativeValue: NSFOC, achieved: ASFOC, gainLoss: gainSFOC.toFixed(3)  },
{ srNo: 5, parameter: 'Transit Loss', unit: '%', normativeValue: NTL, achieved: ATL, gainLoss: gainTL.toFixed(3)  }
];

// Incentive Gains Report Data
const incentiveGainsData = [
{ srNo: 6, parameter: 'MTBF', unit: 'days', minNormativeValue: 45, achieved: AMTBF, gain: gainMTBF.toFixed(3)  },
{ srNo: 7, parameter: 'Ramp rate above 1%', unit: '%/min', description: 'above 1% ramp rate', achieved: ARR, gain: gainRampRate.toFixed(3)  },
{ srNo: 8, parameter: 'Peak AVF', unit: '%', minNormativeValue: 75, achieved: APAVF, gain: gainPeakAVF.toFixed(3)  },
{ srNo: 9, parameter: 'FGMO status', unit: '-', description: 'In service', achieved: 'y', gain: gainFGMO.toFixed(3) }
];

// Net Gain/Loss
const normGainLoss = gainAPC + gainSFOC + gainTL + gainNSHR + gainAVF ;

const incentiveGainLoss = gainMTBF + gainRampRate + gainPeakAVF + gainFGMO;

const netGainLoss = normGainLoss - incentiveGainLoss;

// Constructing Gain/Loss Report HTML
let gainLossHTML = `
<h2 class="text-md font-semibold">Gain/ Loss Report as per Norms</h2>
<table class="mt-1 border-collapse border border-gray-300 shadow-md rounded-md">
    <thead>
        <tr class="bg-gray-200">
            <th class="border border-gray-300 px-1 py-1">#</th>
            <th class="border border-gray-300 px-1 py-1">Parameter</th>
            <th class="border border-gray-300 px-1 py-1">Unit</th>
            <th class="border border-gray-300 px-1 py-1">Normative</th>
            <th class="border border-gray-300 px-1 py-1">Achieved</th>
            <th class="border border-gray-300 px-1 py-1">Gain/ Loss (Cr.)</th>
        </tr>
    </thead>
    <tbody>
`;

gainLossData.forEach(item => {
gainLossHTML += `
    <tr>
        <td class="border border-gray-300 px-2 py-1">${item.srNo}</td>
        <td class="border border-gray-300 px-2 py-1">${item.parameter}</td>
        <td class="border border-gray-300 px-2 py-1">${item.unit}</td>
        <td class="border border-gray-300 px-2 py-1">${item.normativeValue}</td>
        <td class="border border-gray-300 px-2 py-1">${item.achieved}</td>
        <td class="border border-gray-300 px-2 py-1">${item.gainLoss}</td>
    </tr>
`;
});

gainLossHTML += `
    <tr>
        <td colspan="5" class="border border-gray-300 px-2 py-1 text-right font-semibold">Total</td>
        <td class="border border-gray-300 px-2 py-1 font-semibold">${normGainLoss.toFixed(4)}</td>
    </tr>
</tbody>
</table>
`;

// Constructing Incentive Gains Report HTML
let incentiveGainsHTML = `
<h2 class="text-md font-semibold mt-8">Incentive Gains Report as per Regulations</h2>
<table class="mt-6 border-collapse border border-gray-300 shadow-md rounded-md">
    <thead>
        <tr class="bg-gray-200">
            <th class="border border-gray-300 px-2 py-1">#</th>
            <th class="border border-gray-300 px-2 py-1">Parameter</th>
            <th class="border border-gray-300 px-2 py-1">Unit</th>
            <th class="border border-gray-300 px-2 py-1">Achieved</th>
            <th class="border border-gray-300 px-2 py-1">Gain</th>
        </tr>
    </thead>
    <tbody>
`;

incentiveGainsData.forEach(item => {
incentiveGainsHTML += `
    <tr>
        <td class="border border-gray-300 px-2 py-1">${item.srNo}</td>
        <td class="border border-gray-300 px-2 py-1">${item.parameter}</td>
        <td class="border border-gray-300 px-2 py-1">${item.unit}</td>
        <td class="border border-gray-300 px-2 py-1">${item.achieved}</td>
        <td class="border border-gray-300 px-2 py-1">${item.gain}</td>
    </tr>
`;
});

incentiveGainsHTML += `
    <tr>
        <td colspan="4" class="border border-gray-300 px-2 py-1 text-right font-semibold">Total</td>
        <td class="border border-gray-300 px-2 py-1 font-semibold">${incentiveGainLoss.toFixed(4)}</td>
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

gainLossData.forEach(chart => {
const ctx = document.getElementById(`chart${chart.srNo}`).getContext('2d');

const getChartColor = (chartId, achieved, normativeValue) => {
    if (chartId === 'chart2') {
        return achieved > normativeValue ? '#16a34a' : '#dc2626';
    } else {
        return achieved > normativeValue ? '#dc2626' : '#16a34a';
    }
};


const achievedColor = chart.achieved > chart.normativeValue ? '#dc2626' : '#16a34a'; 

new Chart (ctx, {
    type: 'bar', 
    data: { 
        labels: ['Normative', 'Achieved'], 
        datasets: [{
            label: chart.parameter, 
            data: [chart.normativeValue, chart.achieved], 
            backgroundColor: ['#6366f1', getChartColor(`chart${chart.srNo}`, chart.achieved, chart.normativeValue)],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 2
        }]
    }, 
    options: {
        indexAxis: 'y', 
        responsive: true, 
        
    }
})
})

const ctx1 = document.getElementById(`chart6`).getContext('2d');

new Chart (ctx1, {
    type: 'doughnut', 
    data: { 
        labels: ['MTBF', 'Ramp Rate', 'Peak AVF', 'FGMO Status'], 
        datasets: [{
            label: 'Gains', 
            data: [gainMTBF, gainRampRate, gainPeakAVF, gainFGMO], 
            backgroundColor: ['#ef4444', '#facc15', '#4ade80', '#3b82f6' ],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)' ],
            borderWidth: 2
        }]
    }, 
    options: {
        responsive: true, 
        maintainAspectRatio: true,
        plugins: {
            legend: {
              position: 'top'
            }
    }
}
});

const ctx2 = document.getElementById(`chart7`).getContext('2d');

new Chart (ctx2, {
    type: 'bar', 
    data: { 
        labels: ['Availability Factor', 'Heat Rate', 'Auxilliary Power Consumption', 'Specific Oil Consumption', 'Transit Loss'], 
        datasets: [{
            label: 'Gains', // change this
            data: [gainAVF, gainNSHR, gainAPC, gainSFOC, gainTL], 
            backgroundColor: ['#1e40af', '#a21caf', '#9f1239', '#166534' ],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)' ],
            borderWidth: 2
        }]
    }, 
    options: {
        responsive: true, 
        plugins: {
            legend: {
              position: 'top'
            }
    }
}
});

}
/*
function generateReport (gainValues, afterCalculations, ROEValues, parsedValues){
const { gainMTBF, gainRampRate, gainPeakAVF, gainFGMO, gainAPC, gainSFOC, gainTL, gainNSHR, gainAVF } = gainValues;

const { AAPC, AAVFTDR, ASHR, ASFOC } = afterCalculations;

const { ATL, ATLC, AMTBF, ARR, APAVF, NAVF, NSHR, NAPC, NSFOC, NTL } = parsedValues;        

// Gain/Loss Report Data
const gainLossData = [
    { srNo: 1, parameter: 'Availability Factor', unit: '%', normativeValue: NAVF, achieved: AAVFTDR, gainLoss: gainAVF.toFixed(3)  },
    { srNo: 2, parameter: 'Heat Rate', unit: 'kcal/kwh', normativeValue: NSHR, achieved: ASHR.toFixed(3) , gainLoss: gainNSHR.toFixed(3)  },
    { srNo: 3, parameter: 'Auxiliary Power Consumption', unit: '%', normativeValue: NAPC, achieved: AAPC, gainLoss: gainAPC.toFixed(3)  },
    { srNo: 4, parameter: 'Specific Oil Consumption', unit: 'ml/kwh', normativeValue: NSFOC, achieved: ASFOC, gainLoss: gainSFOC.toFixed(3)  },
    { srNo: 5, parameter: 'Transit Loss', unit: '%', normativeValue: NTL, achieved: ATL, gainLoss: gainTL.toFixed(3)  }
];

// Incentive Gains Report Data
const incentiveGainsData = [
    { srNo: 6, parameter: 'MTBF', unit: 'days', minNormativeValue: 45, achieved: AMTBF, gain: gainMTBF.toFixed(3)  },
    { srNo: 7, parameter: 'Ramp rate above 1%', unit: '%/min', description: 'above 1% ramp rate', achieved: ARR, gain: gainRampRate.toFixed(3)  },
    { srNo: 8, parameter: 'Peak AVF', unit: '%', minNormativeValue: 75, achieved: APAVF, gain: gainPeakAVF.toFixed(3)  },
    { srNo: 9, parameter: 'FGMO status', unit: '-', description: 'In service', achieved: 'y', gain: gainFGMO.toFixed(3) }
];

// Net Gain/Loss
const normGainLoss = gainAPC + gainSFOC + gainTL + gainNSHR + gainAVF ;

const incentiveGainLoss = gainMTBF + gainRampRate + gainPeakAVF + gainFGMO;

const netGainLoss = normGainLoss - incentiveGainLoss;

const gainLossDataOut = localStorage.setItem('gainLossData');


} */

document.getElementById('inputForm').addEventListener('submit', handleSubmit);




