const insightData = [
    {
        parameter: "Availability Factor",
        primaryTrigger: "AVF < Normative value",
        data: [
            {
                mode: "Low GCV",
                sourceSheet: "External Factor loss sheet",
                actionPlan: [
                    "Resampling of coal samples to be done",
                    "Review the past GCV data for the similar coal received",
                    "Check the loading of coal mills",
                    "Check the blending ratio / required change in blending",
                    "Review the coal procurement strategy"
                ]
            },
            {
                mode: "Non-availability of equipment",
                sourceSheet: "O&M loss sheet",
                actionPlan: [
                    "Review the auxiliary outage/ partial losses for the unit",
                    "Review the frequency of recurring auxiliary outage for the unit",
                    "Review the Inventory and corresponding spare consumption pattern",
                    "Review the procurement pattern with regards to spares"
                ]
            },
            {
                mode: "Low Coal stock",
                sourceSheet: "External Factor loss sheet",
                actionPlan: [
                    "Ensure proper coordination with the coal company ensuring proper supply of coal",
                    "Optimize available stock to get maximum possible generation"
                ]
            },
            {
                mode: "Wet Coal",
                sourceSheet: "External Factor loss sheet",
                actionPlan: [
                    "Check the coal blending ratio and usage of available coal (Direct bunkering / Reclaiming)",
                    "Maintain coal mill availability by thorough monitoring of coal bunkers/feeders"
                ]
            }
        ],
        header: [
            "Normative AVF (kcal/kwh)",
            "Achieved AVF (kcal/kwh)",
            "Deviation (kcal/kwh)",
            "Gain/Loss (in Rs.Crs.)"
        ],
        values: [
            "85", "80.3", "-4.7", "-8.76"
        ],

        secondTable: [
            "Achieved Generation (Mus)", "Average AVF achieved", "AVF achieved in HDS", "AVF achieved in LDS"
        ],
        secondValues: [
            "300", "80.3", "86.57", "78.9"
        ],
        graphValues1: [
            80.3, 86.57, 78.9
        ]

    },

    {
        parameter: "Heat Rate",
        primaryTrigger: "SHR > Normative value",
        data: [
            {
                mode: "High Coal Consumption",
                sourceSheet: "Unit performance report",
                actionPlan: [
                    "Review the receieved coal parameters with historical data",
                    "Check the Coal mill operation and loading of coal mills",
                    "Review the Boiler operational parameters and check for deviations"
                ]
            },
            {
                mode: "GCV variation",
                sourceSheet: "Unit performance report",
                actionPlan: [
                    "Resampling of coal samples to be done",
                    "Review the past GCV data for the similar coal recieved",
                    "Check the loading of coal mills",
                    "Check the blending ratio / required change in blending",
                    "Review the coal procurement strategy"
                ]
            },
            {
                mode: "Generation loss",
                sourceSheet: "External and O&M generation loss sheet",
                actionPlan: [
                    "Review Availability of equipments of the unit",
                    "Review minor partial losses due to auxiliary changeover/ tripping for the unit",
                    "Check weightage of External loss factors like GCV, LDBD, Wet Coal etc."
                ]
            }
        ],
        header: [
            "Normative SHR (kcal/kwh)",
            "Achieved SHR (kcal/kwh)",
            "Deviation (kcal/kwh)",
            "Gain/Loss (in Rs.Crs.)",
            "Total Loss (in Rs.Crs.)"
        ],
        values: [
            "2375", "2580", "-205", "-89.66", "-112.36"
        ],
        secondTable: [
            "Achieved Generation (Mus)", "Coal factor achieved (%)", "Approved Coal factor (%)", "Difference in Loading end and Unloading end GCV", "Normative Rs./Mkcal",
            "Effective Rs./Mkcal"
        ],
        secondValues: [
            "300", "0.78", "0.68", "860", "1050", "1280"
        ],
        graphValues1: [
            2375, 2580
        ],
        graphValues2: [
            1050, 128
        ]
    },

    {
        parameter: "Auxiliary Power Consumption",
        primaryTrigger: "APC > Normative value",
        data: [
            {
                mode: "High Auxilliary Consumption",
                sourceSheet: "Unit performance report / Energy Management system report",
                actionPlan: [
                    "Review the sectorwise auxiliary power consumption (CHP, Coal mill, ODP) of the unit"
                ]
            },
            {
                mode: "Low Generation",
                sourceSheet: "External and O&M generation loss sheet",
                actionPlan: [
                    "Review Availability of equipments of the unit",
                    "Review minor partial losses due to auxiliary changeover/ tripping for the unit",
                    "Check weightage of External loss factors like GCV, LDBD, Wet Coal etc."
                ]
            }
        ],
        header: [
            "Normative APC (%)",
            "Achieved APC (%)",
            "Deviation (%)",
            "Gain/Loss (in Rs.Crs.)",
            "Total Loss (in Rs.Crs.)"
        ],
        values: [
            "6", "6.2", "-0.2", "-1.42", "-112.36"
        ],
        secondTable: [
            "Achieved Generation (Mus)", "APC achieved (Mus)", "Approved APC (Mus)", "Loss due to External factors (%)", "Loss due to O&M factors (%)"
        ],
        secondValues: [
            "300", "18.6", "18", "9.87", "6.796"
        ],
        graphValues1: [
            6, 6.2
        ],
        graphValues2: [
            9.87, 6.796
        ]
    },

    {
        parameter: "Specific Oil Consumption",
        primaryTrigger: "SOC > Normative value",
        data: [
            {
                mode: "High Secondary Consumption",
                sourceSheet: "Specific Oil Consumption report",
                actionPlan: [
                    "Review the secondary oil consumption reasons for flame stability"
                ]
            },
            {
                mode: "Plant Outages",
                sourceSheet: "External and O&M generation loss sheet",
                actionPlan: [
                    "Review the plant outage factors",
                    "Review the time required for startup",
                    " Review the set stabilization period"
                ]
            }
        ],
        header: [
            "Normative SOC (ml/kwh)",
            "Achieved SOC (ml/kwh)",
            "Deviation (ml/kwh)",
            "Gain/Loss (in Rs.Crs.)",
            "Total Loss (in Rs.Crs.)"
        ],
        values: [
            "0.5", "0.78", "-0.28", "-2.36", "-112.36"
        ],
        secondTable: [
            "SOC achieved (ml/kwh)", "Approved SOC (ml/kwh)", "Oil Consumption reasons", "Unit startup", "Set stabilization", "Flame stability"
        ],
        secondValues: [
            "0.78", "0.5", "", "0.38", "0.24", "0.16"
        ],
        graphValues1: [
            0.5, 0.78
        ],
        graphValues2: [
            0.38, 0.24, 0.16
        ]
    },

    {
        parameter: "Transit Loss",
        primaryTrigger: "Coal TL > Normative Value",
        data: [
            {
                mode: "High Coal TL",
                sourceSheet: "Unit performance report / Coal receipt and accounting report",
                actionPlan: [
                    "Co-ordinate with transport agency for ensuring no transport losses",
                    "Verify the loading end weighing data with coal company",
                    "Arrange for mutual calibration of weigh bridges at coal loading end",
                    "Ensure proper and periodic calibration of weigh bridges at unloading end"
                ]
            }
        ],
        header: [
            "Normative SHR (%)",
            "Achieved SHR (%)",
            "Deviation (%)",
            "Gain/Loss (in Rs.Crs.)",
            "Total Loss (in Rs.Crs.)"
        ],
        values: [
            "0.8", "1.2", "-0.4", "-5.93", "-112.36"
        ],
        secondTable: [
            "TL achieved (%)", "Approved TL (%)", "TL analysis", "Coal Source", "WCL", "MCL"
        ],
        secondValues: [
            "0.8", "1.2", ""
        ],
        graphValues1: [
            0.8, 1.2
        ]
    }

]

const selectKPKD = document.querySelectorAll('select')[2];
selectKPKD.addEventListener('change', function () {
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectKPKD2 = document.querySelectorAll('select')[2];
selectKPKD2.addEventListener('change', function () {
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectBSL = document.querySelectorAll('select')[0];
selectBSL.addEventListener('change', function () {
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectBSL2 = document.querySelectorAll('select')[0];
selectBSL2.addEventListener('change', function () {
    if (this.value === 'preset4') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectCSTPS = document.querySelectorAll('select')[1];
selectCSTPS.addEventListener('change', function () {
    if (this.value === 'preset5') {
        fillForm({
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
            NADLURGCV: 650,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 715.58,
            AAPCM: 86.756,
            ARCC: 646679.00,
            AWCC: 0,
            AICC: 26244,
            ALDOC: 0,
            AFOC: 0,
            ARGCVB: 4060,
            AWGCVB: 3550,
            AIGCVB: 4693,
            ARGCVR: 4060,
            AWGCVR: 3766,
            AIGCVR: 4693,
            ALDOGCV: 10657,
            AFOGCV: 10593,
            ACGCV: 3185,
            ARCLC: 4495,
            AWCLC: 4580,
            AICLC: 111340,
            ALDOLC: 49015.35,
            AFOLC: 39047.69,
            IRCCC: 4495.00,
            IWCCC: 4580,
            IICCC: 111340,
            OVC: 0,
            ATL: 0.89,
            ATLC: 2.59,
            AMTBF: 56,
            ARR: 0.5,
            APAVF: 86,
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0,
            ADCTDR: 0,
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectCSTPS2 = document.querySelectorAll('select')[1];
selectCSTPS2.addEventListener('change', function () {
    if (this.value === 'preset6') {
        fillForm({
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
            NADLURGCV: 650,
            NADLUWGCV: 300,
            // NORMATIVE/REGULATORY VALUES
            AGEN: 527.13,
            AAPCM: 32.648,
            ARCC: 310700.00,
            AWCC: 0,
            AICC: 48000,
            ALDOC: 0,
            AFOC: 0,
            ARGCVB: 4109,
            AWGCVB: 3696,
            AIGCVB: 4678,
            ARGCVR: 3445,
            AWGCVR: 2686,
            AIGCVR: 4678,
            ALDOGCV: 10657,
            AFOGCV: 10593,
            ACGCV: 3491,
            ARCLC: 3982,
            AWCLC: 4130,
            AICLC: 11179,
            ALDOLC: 49015.35,
            AFOLC: 39047.69,
            IRCCC: 3982.00,
            IWCCC: 4130,
            IICCC: 11179,
            OVC: 0,
            ATL: 1.51,
            ATLC: 1.87,
            AMTBF: 56,
            ARR: 0.5,
            APAVF: 86,
            FGMOS: 1,
            PDCTDR: 0,
            OPDCTDR: 0,
            ADCTDR: 0,
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectKTPS = document.querySelectorAll('select')[3];
selectKTPS.addEventListener('change', function () {
    if (this.value === 'preset7') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectKTPS2 = document.querySelectorAll('select')[3];
selectKTPS2.addEventListener('change', function () {
    if (this.value === 'preset8') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectNTPS = document.querySelectorAll('select')[4];
selectNTPS.addEventListener('change', function () {
    if (this.value === 'preset9') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectPARAS = document.querySelectorAll('select')[5];
selectPARAS.addEventListener('change', function () {
    if (this.value === 'preset10') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectPARALI = document.querySelectorAll('select')[6];
selectPARALI.addEventListener('change', function () {
    if (this.value === 'preset11') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

const selectPARALI2 = document.querySelectorAll('select')[6];
selectPARALI2.addEventListener('change', function () {
    if (this.value === 'preset12') {
        fillForm({
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
            NADLURGCV: 650,
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
            OPDCHDS: 0,
            ADCHDS: 0,
            PDCLDS: 0,
            OPDCLDS: 0,
            ADCLDS: 0
        });
    }
});

function convertToPercentage(percentageValues) {
    return percentageValues.map(value => value / 100);
}

function FGMOstatus() {
    const checkbox = document.getElementById('FGMO')

    if (checkbox.checked) {
        return 1.25 / 100
    } else {
        return 0;
    }
}

function setTDR() {

    const startDateInput = document.getElementById('start-date').value;
    const endDateInput = document.getElementById('end-date').value;

    localStorage.setItem('selectedDate',`${startDateInput.replace(/-/g, '/')} - ${endDateInput.replace(/-/g, '/')}`)

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

    return { TDFY, startYear, endYear };
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
        ARCLC, AWCLC, AICLC, IRCCC, PDCHDS } = parsedValues;

    const AWCCC = (AWCC * AWCLC) / 10 ** 7;
    const AICCC = (AICC * AICLC) / 10 ** 7;
    const ARCCC = (ARCC * ARCLC) / 10 ** 7;
    const AAPC = (AAPCM / AGEN) * 100;
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
    const NRCCC = (NRCC * NRCLC) / 10 ** 7;


    const NWCC = NHCWC / NCGCV * 1000;
    const NWCCC = (NWCC * NWCLC) / 10 ** 7;
    const NICC = NHCIC / NCGCV * 1000;
    const NICCC = (NICC * NICLC) / 10 ** 7;
    const NLDOCC = (NLDOC * NLDOLC) / 10 ** 7;
    const NFOCC = (NFOC * NFOLC) / 10 ** 7;
    const TNFCC = NRCCC + NWCCC + NICCC + NLDOCC + NFOCC;
    const APECR = (TNFCC / (AGEN - AAPCM)) * 10;
    const ALDOCC = ALDOC * ALDOLC / 10 ** 7;
    const AFOCC = AFOC * AFOLC / 10 ** 7;
    const AHCLDO = ALDOC * ALDOGCV * 0.853 / 1000;
    const AHCFO = AFOC * AFOGCV * 0.933 / 1000;
    const ATHCF = AHCRC + AHCWC + AHCIC + AHCLDO + AHCFO;
    const ASHR = (((ARCC + AWCC + AICC) * NCGCV) / AGEN) / 1000;
    const ASLDOC = ALDOC / AGEN;
    const ASFOC = AFOC / AGEN;
    const ACSFOC = ASLDOC + ASFOC;


    const ECTDR = IC * (1 - NAPC) * TDR;
    // const AAVFTDR = 100  * ( ADCTDR / ECTDR ); // disable and apply new formula

    const AAVFTDR = PDCHDS;

    const OPAVFTDR = 100 * (OPDCTDR / ECTDR);
    const MPROPAVFTDR = 0.8 * NFCEWC * TDR / TDFY;

    const AROPAVFTDR = (OPAVFTDR >= NAVF) ? MPROPAVFTDR : (0.8 * 85 * OPAVFTDR * NFCEWC * TDR / TDFY);

    const MPRPAVFTDR = 0.2 * NFCEWC * TDR / TDFY;
    const PAVFTDR = 100 * PDCTDR / ECTDR
    const ARPAVFTDR = (PAVFTDR >= NAVF) ? MPRPAVFTDR : (0.2 * 85 * PAVFTDR * NFCEWC * TDR / TDFY);
    const ARAAVFTDR = ARPAVFTDR + AROPAVFTDR;
    const MPRAAVFTDR = MPRPAVFTDR + MPROPAVFTDR;

    return {
        NTHCF, NAPCM, AHCWC, NLDOC, NHCLDO, NFOC, NHCFO, AHCRC, AHCIC, NHCWC, NHCIC, NHCRC, NRGCVR,
        NWGCVR, ASL, APSL, NCGCV, NRCC, NRCCC, NRCLC, NWCC, NWCCC, NICC, NICCC, NLDOCC, NFOCC, TNFCC, APECR,
        ALDOCC, AFOCC, ARAAVFTDR, MPRAAVFTDR, AAPC, AAVFTDR, ASHR, ASFOC, NTL, ARCCC, AICCC, AWCCC, AAPCM, AHCLDO, AHCFO, ATHCF
    };
}

function calculateGainValues(parsedValues, afterCalculations, ROEValues, TDR, TDFY) {
    const { ROE_RP, converted_ROE_MTBF, converted_ROE_RR, converted_ROE_PAVF } = ROEValues;
    const { NAPCM, APECR, NLDOCC, NFOCC, ALDOCC, AFOCC, NRCCC, NWCCC, NICCC, ARAAVFTDR, MPRAAVFTDR, AAPCM, AICCC, AWCCC, ARCCC } = afterCalculations;
    const { ARCC, ATLC, NTL, IRCCC, NFCEWC, PDCHDS, NAVF } = parsedValues;


    const ROE_FGMO = FGMOstatus();

    const gainMTBF = converted_ROE_MTBF * ROE_RP;
    const gainRampRate = converted_ROE_RR * ROE_RP;
    const gainPeakAVF = converted_ROE_PAVF * ROE_RP;
    const gainFGMO = ROE_FGMO * ROE_RP;
    const gainAPC = ((NAPCM - AAPCM) * APECR) / 10;
    const gainSFOC = NLDOCC + NFOCC - ALDOCC - AFOCC;
    const gainTL = ((((IRCCC * ARCC) / (1 - (NTL / 100))) - (IRCCC * ARCC)) / 10 ** 7) - ATLC;
    const gainNSHR = NRCCC + NWCCC + NICCC - ARCCC - AWCCC - AICCC - gainTL;
    // const gainAVF = ARAAVFTDR - MPRAAVFTDR;

    let gainAVF = 0;

    if (PDCHDS < NAVF) {
        gainAVF = (NFCEWC * TDR) / TDFY * - (1 - (PDCHDS / NAVF));
    }

    return { gainMTBF, gainRampRate, gainPeakAVF, gainFGMO, gainAPC, gainSFOC, gainTL, gainNSHR, gainAVF, gainSFOC };
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

    const { TDFY, startYear, endYear } = calculateTDFY();
    console.log(TDFY, startYear, endYear);

    const formData = new FormData(event.target);
    console.log(formData);

    const parsedValues = parseFormData(formData);
    console.log(parsedValues);

    const ROEValues = calculateROEValues(parsedValues, TDR, TDFY);
    console.log(ROEValues);

    const afterCalculations = calculations(parsedValues, TDR, TDFY);
    console.log(afterCalculations);

    const gainValues = calculateGainValues(parsedValues, afterCalculations, ROEValues, TDR, TDFY)
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

    localStorage.setItem('parsedValues', JSON.stringify(parsedValues));
    localStorage.setItem('afterCalculations', JSON.stringify(afterCalculations));
    localStorage.setItem('ROEValues', JSON.stringify(ROEValues));


    localStorage.setItem('reportData', JSON.stringify(reportData));

    window.location.href = 'output.html';

}

function updateSmallerChart(chartID, label, parsedValues, afterCalculations) {

    const { ASHR, AAPC, ASFOC } = afterCalculations;
    const { ATL, APAVF, NAVF, NSHR, NAPC, NSFOC, NTL } = parsedValues;

    const newData = {
        'Avail Factor': { normativeValue: NAVF, achieved: APAVF },
        'Heat Rate': { normativeValue: NSHR, achieved: ASHR },
        'Aux Power Con': { normativeValue: NAPC, achieved: AAPC },
        'Spec Oil Con': { normativeValue: NSFOC, achieved: ASFOC },
        'Transit Loss': { normativeValue: NTL, achieved: ATL },
    };

    const dataToUpdate = newData[label]
        ? [newData[label].normativeValue, newData[label].achieved]
        : [0, 0];

    console.log(dataToUpdate);

    const ctx = document.getElementById(`dynamicIncentives`).getContext('2d');
    const chartTitle = document.getElementById(`chartTitle`)

    chartTitle.textContent = label;

    const getChartColor = (chartID, achieved, normativeValue) => {
        if (chartID === 'chart1') {
            return achieved > normativeValue ? '#16a34a' : '#dc2626';
        } else {
            return achieved > normativeValue ? '#dc2626' : '#16a34a';
        }
    };

    const achievedColor = getChartColor(chartID, dataToUpdate.achieved, dataToUpdate.normativeValue);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Normative', 'Achieved'],
            datasets: [{
                label: label,
                data: [dataToUpdate[0], dataToUpdate[1]],
                backgroundColor: ['#6366f1', achievedColor],
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: { // Updated from xAxes
                    beginAtZero: true
                },
                y: { // Updated from yAxes
                    beginAtZero: true
                }
            }
        }
    })
}

function updateSelectedLabel(selectElement) {
    const selectedLabel = selectElement.options[selectElement.selectedIndex].text;
    const selectId = selectElement.id; // Get the ID or some unique identifier
    localStorage.setItem('selectedLabel_' + selectId, JSON.stringify(selectedLabel));
}

function moreInfoPage(parameter) {

    console.log(parameter)
    console.log(insightData)
    localStorage.setItem('gainLoss',parameter)
    const matchingObject = insightData.find(item => item.parameter === parameter);
    console.log(matchingObject)

    if (matchingObject) {
        localStorage.setItem('insightData', JSON.stringify(matchingObject));
    }
    window.location.href = 'third.html';

}

function populateTable(data) {
    const tableBody = document.querySelector('#insightTableBody');

    data.forEach(item => {
        item.data.forEach(mode => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td class="border border-gray-300 px-1 py-1"><small>${mode.mode}</small></td>
        <td> <small>
            <ul class="list-disc pl-5 border border-gray-300 px-1 py-1";>
                ${mode.actionPlan.map(action => `<li>${action}</li>`).join('')}
            </ul>
        </small></td>
    `;

            tableBody.appendChild(row);
        })
    })
}

function generateReport(gainValues, afterCalculations, ROEValues, parsedValues) {

    const { ROE_RP, converted_ROE_MTBF, converted_ROE_RR, converted_ROE_PAVF } = ROEValues;

    const { gainMTBF, gainRampRate, gainPeakAVF, gainFGMO, gainAPC, gainSFOC, gainTL, gainNSHR, gainAVF } = gainValues;

    const { AAPC, AAVFTDR, ASHR, ASFOC } = afterCalculations;

    const { ATL, ATLC, AMTBF, ARR, APAVF, NAVF, NSHR, NAPC, NSFOC, NTL } = parsedValues;

    // Gain/Loss Report Data
    const gainLossData = [
        { srNo: 1, parameter: 'Availability Factor', unit: '%', normativeValue: NAVF, achieved: AAVFTDR.toFixed(3), gainLoss: gainAVF.toFixed(3) },
        { srNo: 2, parameter: 'Heat Rate', unit: 'kcal/kwh', normativeValue: NSHR, achieved: ASHR.toFixed(3), gainLoss: gainNSHR.toFixed(3) },
        { srNo: 3, parameter: 'Auxiliary Power Consumption', unit: '%', normativeValue: NAPC, achieved: AAPC.toFixed(3), gainLoss: gainAPC.toFixed(3) },
        { srNo: 4, parameter: 'Specific Oil Consumption', unit: 'ml/kwh', normativeValue: NSFOC, achieved: ASFOC.toFixed(3), gainLoss: gainSFOC.toFixed(3) },
        { srNo: 5, parameter: 'Transit Loss', unit: '%', normativeValue: NTL, achieved: ATL, gainLoss: gainTL.toFixed(3) }
    ];

    // Incentive Gains Report Data
    const incentiveGainsData = [
        { srNo: 6, parameter: 'MTBF', unit: 'days', normativeValue: 45, achieved: AMTBF, gain: gainMTBF.toFixed(3) },
        { srNo: 7, parameter: 'Ramp rate above 1%', normativeValue: '%/min', description: 'above 1% ramp rate', achieved: ARR.toFixed(3), gain: gainRampRate.toFixed(3) },
        { srNo: 8, parameter: 'Peak AVF', unit: '%', normativeValue: 75, achieved: APAVF, gain: gainPeakAVF.toFixed(3) },
        { srNo: 9, parameter: 'FGMO status', unit: '-', normativeValue: 'In service', achieved: 'y', gain: gainFGMO.toFixed(3) }
    ];

    // Net Gain/Loss
    const normGainLoss = gainAPC + gainSFOC + gainTL + gainNSHR + gainAVF;

    const incentiveGainLoss = gainMTBF + gainRampRate + gainPeakAVF + gainFGMO;

    const netGainLoss = normGainLoss - incentiveGainLoss;

    // Constructing Gain/Loss Report HTML

    let gainLossHTML = `
<div class="relative overflow-x-auto">
<h2 class="text-md text-center font-semibold">Gain/ Loss Report as per Norms</h2>
<table class="mt-1 w-full border-collapse border border-gray-300 shadow-md rounded-md">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="bg-gray-200">
            <th scope="col" class="border border-gray-300 py-1">Parameter</th>
            <th scope="col" class="border border-gray-300 py-1">Unit</th>
            <th scope="col" class="border border-gray-300 px-1 py-1">Normative</th>
            <th scope="col" class="border border-gray-300 py-1">Achieved</th>
            <th scope="col" class="border border-gray-300 py-1">Gain/ Loss(Cr.)</th>
        </tr>
    </thead>
    
    <tbody>
`

    gainLossData.forEach(item => {
        gainLossHTML += `
    <tr class="font-sans text-sm">
        <td class="border border-gray-300 px-1 py-1">
        <a onClick="moreInfoPage('${item.parameter}')" class="cursor-pointer text-blue-500 underline hover:text-blue-700">${item.parameter}</a>
        </td>
        <td class="border border-gray-300 px-1 py-1">${item.unit}</td>
        <td class="border border-gray-300 px-1 py-1">${item.normativeValue}</td>
        <td class="border border-gray-300 px-1 py-1">${item.achieved}</td>
        <td class="border border-gray-300 px-1 py-1">${item.gainLoss}</td>
    </tr>
`
    })

    gainLossHTML += `
    <tr>
        <td colspan="4" class="border border-gray-300 px-2 py-1 text-right text-sm font-semibold">Total</td>
        <td class="border border-gray-300 px-2 py-1 font-semibold text-sm">${normGainLoss.toFixed(4)}</td>
    </tr>

</tbody>
</table>
</div>
`
    document.getElementById('gain-loss-report').innerHTML = gainLossHTML;

    // Constructing Incentive Gains Report HTML
    let incentiveGainsHTML = `
<div class="relative overflow-y-auto">
<h2 class="text-md text-center font-semibold"">Incentive Gains Report as per Regulations</h2>
<table class="mt-1 w-full border-collapse border border-gray-300 shadow-md rounded-md">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="bg-gray-200">
            <th class="border border-gray-300 px-2 py-1">Parameter</th>
            <th class="border border-gray-300 px-2 py-1">Unit</th>
            <th class="border border-gray-300 px-2 py-1">Note</th>
            <th class="border border-gray-300 px-2 py-1">Achieved</th>
            <th class="border border-gray-300 px-2 py-1">Gain/Loss</th>
        </tr>
    </thead>
    <tbody>
`;

    incentiveGainsData.forEach(item => {
        incentiveGainsHTML += `
    <tr class="font-sans text-sm">
        <td class="border border-gray-300 px-2 py-1"><span> ${item.parameter}</span></td>
        <td class="border border-gray-300 px-2 py-1">${item.unit}</td>
        <td class="border border-gray-300 px-1 py-1">${item.normativeValue}</td>
        <td class="border border-gray-300 px-2 py-1">${item.achieved}</td>
        <td class="border border-gray-300 px-2 py-1">${item.gain}</td>
    </tr>
`;
    });

    incentiveGainsHTML += `
    <tr>
        <td colspan="4" class="border border-gray-300 px-2 py-1 text-right font-semibold text-sm">Total</td>
        <td class="border border-gray-300 px-2 py-1 font-semibold text-sm">${incentiveGainLoss.toFixed(4)}</td>
    </tr>
</tbody>
</table>
</div>
`;

    document.getElementById('incentive-gains-report').innerHTML = incentiveGainsHTML;

    // Net Gain/Loss
    let netGainLossHTML = `
<h2 class="text-lg font-semibold mt-8">Net Gain/ Loss</h2>
<p class="mt-4">Net Gain/ Loss: <span class="font-semibold">${netGainLoss.toFixed(4)}</span></p>
`;

    //const reportOutput = document.getElementById('reportOutput');
    //reportOutput.innerHTML = gainLossHTML + incentiveGainsHTML;


    const ctx1 = document.getElementById(`chart6`).getContext('2d');

    const dataValues1 = [gainMTBF, gainRampRate, gainPeakAVF, gainFGMO];

    const getDoughnutColor = (values) => {
        const indexedValues = values.map((value, index) => ({ value, index }));

        indexedValues.sort((a, b) => b.value - a.value);

        const colors = new Array(values.length).fill('#000000');
        if (indexedValues.length > 0) colors[indexedValues[0].index] = '#7f6519'; // Highest
        if (indexedValues.length > 1) colors[indexedValues[1].index] = '#848406'; // 2nd highest
        if (indexedValues.length > 2) colors[indexedValues[2].index] = '#e4c97b'; // 3rd highest
        if (indexedValues.length > 3) colors[indexedValues[3].index] = '#f3f017'; // 4th highest

        return colors;
    };



    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['MTBF', 'Ramp Rate', 'Peak AVF', 'FGMO Status'],
            datasets: [{
                label: 'Gains',
                data: dataValues1,
                backgroundColor: getDoughnutColor(dataValues1),
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                }
            }
        }
    });

    const ctx2 = document.getElementById(`chart7`).getContext('2d');

    const dataValues = [gainAVF, gainNSHR, gainAPC, gainSFOC, gainTL];

    const getColor = (value) => {
        return value > 0 ? '#16a34a' : '#dc2626';
    };

    const incentivesChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Avail Factor', 'Heat Rate', 'Aux Power Con', 'Spec Oil Con', 'Transit Loss'],
            datasets: [{
                label: 'Gain/Loss',
                data: dataValues,
                backgroundColor: dataValues.map(getColor),
                minBarLength: 7,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        position: 'top',
                    },
                    stacked: true
                },
                y: {
                    title: {
                        display: true,
                        text: 'Loss/Gain'
                    }
                }
            },
            onClick: function (e) {
                const points = incentivesChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);

                if (points.length) {
                    const firstPoint = points[0];
                    const label = incentivesChart.data.labels[firstPoint.index];

                    const chartMapping = {
                        'Avail Factor': 'chart1',
                        'Heat Rate': 'chart2',
                        'Aux Power Con': 'chart3',
                        'Spec Oil Con': 'chart4',
                        'Transit Loss': 'chart5'
                    };

                    const chartID = chartMapping[label];

                    console.log(chartID);

                    if (chartID) {
                        updateSmallerChart(chartID, label, parsedValues, afterCalculations);
                    }
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




