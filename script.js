function calculateTotalTime() {
    var minutes = parseInt(document.getElementById("minutes").value);
    var fiveMinutes = parseInt(document.getElementById("fiveMinutes").value) * 5;
    var hours = parseInt(document.getElementById("hours").value) * 60;
    var eightHours = parseInt(document.getElementById("eightHours").value) * 480; // 8 hours = 8 * 60
    var twelveHours = parseInt(document.getElementById("twelveHours").value) * 720; // 12 hours = 12 * 60
    var twentyFourHours = parseInt(document.getElementById("twentyFourHours").value) * 1440; // 24 hours = 24 * 60

    var totalMinutes = minutes + fiveMinutes + hours + eightHours + twelveHours + twentyFourHours;
    var totalHours = Math.floor(totalMinutes / 60);
    var remainingMinutes = totalMinutes % 60;

    document.getElementById("totalTime").textContent = "الوقت الإجمالي: " + totalHours + " ساعة و " + remainingMinutes + " دقيقة";
}

function calculateTrainingCapacity() {
    var trainingTime = parseInt(document.getElementById("trainingTime").value);
    var trainingHours = parseInt(document.getElementById("trainingHours").value);
    var totalSecondsAvailable = trainingHours * 3600;

    var soldiersTrained = Math.floor(totalSecondsAvailable / trainingTime);

    document.getElementById("result").textContent = "عدد الجنود الذين يمكن تدريبهم: " + soldiersTrained;
}

function calculateTotalIncrease() {
    var singleSoldierIncrease = parseInt(document.getElementById("singleSoldierIncrease").value);
    var soldierCountMultiplier = parseInt(document.getElementById("soldierCountMultiplier").value) * 1000000;

    var totalIncrease = singleSoldierIncrease * soldierCountMultiplier;
    document.getElementById("increaseResult").textContent = "الارتفاع الإجمالي بناءً على " + soldierCountMultiplier + " جندي هو: " + totalIncrease;
}

function calculateExp() {
    var exp100 = parseInt(document.getElementById("exp100").value) * 100;
    var exp500 = parseInt(document.getElementById("exp500").value) * 500;
    var exp1000 = parseInt(document.getElementById("exp1000").value) * 1000;
    var exp5000 = parseInt(document.getElementById("exp5000").value) * 5000;
    var exp10000 = parseInt(document.getElementById("exp10000").value) * 10000;
    var exp20000 = parseInt(document.getElementById("exp20000").value) * 20000;
    var exp100000 = parseInt(document.getElementById("exp100000").value) * 100000;

    var totalExp = exp100 + exp500 + exp1000 + exp5000 + exp10000 + exp20000 + exp100000;
    var expInMillions = totalExp / 1000000;

    document.getElementById("expTotal").textContent = "الخبرة الإجمالية: " + totalExp;
    document.getElementById("expInMillions").textContent = "خبرة بالملايين: " + expInMillions.toFixed(2) + " مليون";
}