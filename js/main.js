// Variabel untuk menyimpan uang dan auto-clicker
var money = 0;
var moneyValue = 1;
var autoClickers = 0;
var cabang = 0;

// Variabel untuk menyimpan status upgrade dan auto-click
var upgrade1 = false;
var upgrade2 = false;
var upgrade3 = false;

// Variabel untuk menyimpan cost upgrade dan auto-click
var upgrade1Cost = 500;
var upgrade2Cost = 50000;
var upgrade3Cost = 5000000;
var autoClickCost = 1;
var cabangCost = 10;

// Variabel untuk menyimpan interval auto-click
var autoClickInterval;

// Fungsi untuk menambah uang
function addMoney(amount) {
    money += (amount);
    document.getElementById("money").innerHTML = Math.floor(money);
}

// Fungsi untuk menambah auto-clicker
function addAutoClicker() {
    autoClickers++;
    document.getElementById("auto-clickers").innerHTML = Math.floor(autoClickers);
}

// Fungsi untuk menambah cabang
function addCabang() {
    cabang++;
    document.getElementById("income-multipliers").innerHTML = Math.floor(cabang);
}

// Fungsi untuk membeli upgrade
function buyUpgrade(cost, upgrade) {
    if (isUpgradePurchased(upgrade)) {
        document.getElementById("bought").style.display = "block";
        return;
    }
        if (!isUpgradePurchased(upgrade) && money >= cost) {
        money -= cost;
        document.getElementById("money").innerHTML = Math.floor(money);
        switch (upgrade) {
            case 1:
                upgrade1 = true;
                document.getElementById("upgrade1").disabled = true;
                moneyValue=moneyValue*1.25
                break;
            case 2:
                upgrade2 = true;
                document.getElementById("upgrade2").disabled = true;
                moneyValue=moneyValue*1.5
                break;
            case 3:
                upgrade3 = true;
                document.getElementById("upgrade3").disabled = true;
                moneyValue=moneyValue*1.75
                break;
        }
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

// Fungsi untuk memeriksa apakah upgrade sudah dibeli
function isUpgradePurchased(upgrade) {
    switch (upgrade) {
        case 1:
            return upgrade1;
        case 2:
            return upgrade2;
        case 3:
            return upgrade3;
        default:
            return false;
    }
}


// Fungsi untuk membeli auto-click
function buyAutoClick(cost) {
    if (money >= cost) {
        money -= cost;
        document.getElementById("money").innerHTML = Math.floor(money);
        addAutoClicker();
        activateAutoClick();
        autoClickCost *= 1.5;
        document.getElementById("auto-click-cost").innerHTML = Math.floor(autoClickCost);
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

// Fungsi untuk membeli cabang
function buyCabang(cost) {
    if (money >= cost) {
        money -= cost;
        document.getElementById("money").innerHTML = Math.floor(money);
        addCabang();
        cabangCost *= 2.5;
        document.getElementById("income-multiplier-cost").innerHTML = Math.floor(cabangCost);
        moneyValue= 2+moneyValue;
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

// Fungsi untuk mengklik objek
function clickObject() {
    addMoney(moneyValue);
}

// Fungsi untuk mengaktifkan auto-click
function activateAutoClick() {
    autoClickInterval = setInterval(function() {
        addMoney(moneyValue);
    }, 1000);
}

// Fungsi untuk menonaktifkan auto-click
function deactivateAutoClick() {
    clearInterval(autoClickInterval);
}

// Event listener untuk mengklik objek
document.getElementById("object").addEventListener("click", clickObject);

// Event listener untuk membeli upgrade 1
document.getElementById("upgrade1").addEventListener("click", function() {
    buyUpgrade(upgrade1Cost, 1);
});

// Event listener untuk membeli upgrade 2
document.getElementById("upgrade2").addEventListener("click", function() {
    buyUpgrade(upgrade2Cost, 2);
});

// Event listener untuk membeli upgrade 3
document.getElementById("upgrade3").addEventListener("click", function() {
    buyUpgrade(upgrade3Cost, 3);
});

// Event listener untuk membeli auto-click
document.getElementById("auto-click").addEventListener("click", function() {
    buyAutoClick(autoClickCost);
});

// Event listener untuk membeli income multiplier
document.getElementById("income-mulitpier").addEventListener("click", function() {
    buyCabang(cabangCost);
});

// Event listener untuk menampilkan halaman About Us
document.getElementById("about-us").addEventListener("click", function() {
    document.getElementById("about-us-modal").style.display = "block";
});

// Event listener untuk menutup peringatan Warning
document.getElementById("close-warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});

// Event listener untuk menutup peringatan Bought
document.getElementById("close-bought").addEventListener("click", function() {
    document.getElementById("bought").style.display = "none";
});

// Event listener untuk menutup halaman About Us
document.getElementById("close-about-us").addEventListener("click", function() {
    document.getElementById("about-us-modal").style.display = "none";
});

// Event listener untuk mengaktifkan auto-click
document.getElementById("main-game").addEventListener("click", function() {
    activateAutoClick();
});

  function playSound() {
    var sfx = document.getElementById("sfx");
    sfx.play();
  }

// Update cost upgrade dan auto-click
document.getElementById("upgrade1-cost").innerHTML = upgrade1Cost;
document.getElementById("upgrade2-cost").innerHTML = upgrade2Cost;
document.getElementById("upgrade3-cost").innerHTML = upgrade3Cost;
document.getElementById("auto-click-cost").innerHTML = Math.floor(autoClickCost);
document.getElementById("income-multiplier-cost").innerHTML = Math.floor(cabangCost);
document.getElementById("money").innerHTML = Math.floor(money);
