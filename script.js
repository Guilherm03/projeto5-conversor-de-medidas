let metersValue = prompt("Insira um valor em metros:");
metersValue = parseFloat(metersValue);

let chooseV = prompt(`Selecione por quais unidades abaixo deseja converter:
1 - milímetro (mm)
2 - centrímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`);

switch (chooseV) {
    case "1":
        alert(`${metersValue}m equivale a ${metersValue * 1000}mm.`);
        break;
    case "2":
        alert(`${metersValue}m equivale a ${metersValue * 100}cm.`);
        break;
    case "3":
        alert(`${metersValue}m equivale a ${metersValue * 10}dm.`);
        break;
    case "4":
        alert(`${metersValue}m equivale a ${metersValue / 10}dam.`);
        break;
    case "5":
        alert(`${metersValue}m equivale a ${metersValue / 100}hm.`);
        break;
    case "6":
        alert(`${metersValue}m equivale a ${metersValue / 1000}km.`);
        break;
    default:
        alert("Opção inválida!");

}
