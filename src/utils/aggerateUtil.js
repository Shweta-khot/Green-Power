export const getQuaterlyDataFromMonthlyData = (monthlyData) => {
    const quaterlyData = [];
    let actualSum = 0;
    let lastYearSum=0;
    monthlyData.forEach((val)=>{
        lastYearSum+=val['Last Year'];
        if(val['Actual']){
            actualSum+=val['Actual'];

        }
        else{
            actualSum+=val['Forecast'];
        }
        if(val['month']%3===0){
            quaterlyData.push({quater:quaterlyData.length+1, 'Last Year': lastYearSum, 'Actual': actualSum});
            actualSum=0;
            lastYearSum=0;
        }
    })
    return quaterlyData;
}

export const getHalfYearlyDataFromMonthlyData = (monthlyData) => {
    const halfYearlyData = [];
    let actualSum = 0;
    let lastYearSum=0;
    monthlyData.forEach((val)=>{

        lastYearSum+=val['Last Year'];
        if(val['Actual']){
            actualSum+=val['Actual'];

        }
        else{
            actualSum+=val['Forecast'];
        }
        if(val['month']%6===0){
            halfYearlyData.push({semester:halfYearlyData.length+1, 'Last Year': lastYearSum, 'Actual': actualSum});
            actualSum=0;
            lastYearSum=0;
        }
    })
    return halfYearlyData;
}

export const getAbsoluteData = (dataArr)=>{
    return dataArr.map((val)=>{
        const actual = val['Actual'] ?? val['Forecast'];
        const lastYear = val['Last Year'];
        return Number.parseFloat(actual-lastYear).toFixed(2);
    });
}


export const getPercentageData = (dataArr)=>{
    return dataArr.map((val)=>{
        const actual = val['Actual'] ?? val['Forecast'];
        const lastYear = val['Last Year'];
        return Number.parseFloat(((actual-lastYear)/lastYear)*100).toFixed(2);
    });
}
