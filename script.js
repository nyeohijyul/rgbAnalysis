function gsbT(a,b,c) {
    return [a,b,c];
}

// vintage
var V11 = gsbT(112,48,48);var V12 = gsbT(47,52,59);var V13 = gsbT(126,130,122);var V14 = gsbT(227,205,164);var V15 = gsbT(199,121,102)
var V21 = gsbT(94,140,101);var V22 = gsbT(166,155,125);var V23 = gsbT(244,226,204);var V24 = gsbT(157,123,111);var V25 = gsbT(140,70,63)
var V31 = gsbT(193,111,80);var V32 = gsbT(235,220,200);var V33 = gsbT(134,105,76);var V34 = gsbT(224,203,177);var V35 = gsbT(109,91,84)
var V41 = gsbT(89,67,54);var V42 = gsbT(166,108,75);var V43 = gsbT(219,180,137);var V44 = gsbT(162,137,106);var V45 = gsbT(117,111,89)
var V51 = gsbT(166,150,119);var V52 = gsbT(64,59,51);var V53 = gsbT(191,138,73);var V54 = gsbT(217,191,160);var V55 = gsbT(13,13,13)
var V61 = gsbT(146,134,120);var V62 = gsbT(160,207,174);var V63 = gsbT(248,224,171);var V64 = gsbT(194,123,112);var V65 = gsbT(78,55,68)
var V71 = gsbT(217,106,126);var V72 = gsbT(64,38,43);var V73 = gsbT(166,56,86);var V74 = gsbT(217,194,167);var V75 = gsbT(217,172,163)
var V81 = gsbT(140,22,44);var V82 = gsbT(146,166,104);var V83 = gsbT(242,129,87);var V84 = gsbT(217,54,54);var V85 = gsbT(64,20,20)
var V91 = gsbT(28,66,73);var V92 = gsbT(138,184,162);var V93 = gsbT(250,255,219);var V94 = gsbT(199,175,63);var V95 = gsbT(41,45,48)
var V01 = gsbT(1,17,38);var V02 = gsbT(4,50,89);var V03 = gsbT(35,110,140);var V04 = gsbT(252,201,189);var V05 = gsbT(242,87,100)
// pastel
var P01 = gsbT(203, 157, 240);var P02 = gsbT(240, 193, 225);var P03 = gsbT(253, 219, 187);var P04 = gsbT(255, 249, 191)
var P11 = gsbT(191, 236, 255);var P12 = gsbT(205, 193, 255);var P13 = gsbT(255, 246, 227);var P14 = gsbT(255, 204, 234)
var P21 = gsbT(255, 247, 209);var P22 = gsbT(255, 236, 200);var P23 = gsbT(255, 208, 155);var P24 = gsbT(255, 176, 176)
var P31 = gsbT(231, 204, 204);var P32 = gsbT(237, 232, 220);var P33 = gsbT(165, 182, 141);var P34 = gsbT(193, 207, 161)
var P41 = gsbT(229, 217, 242);var P42 = gsbT(245, 239, 255);var P43 = gsbT(205, 193, 255);var P44 = gsbT(165, 148, 249)
var P51 = gsbT(240, 168, 208);var P52 = gsbT(247, 181, 202);var P53 = gsbT(255, 198, 198);var P54 = gsbT(255, 235, 212)
var P61 = gsbT(181, 192, 208);var P62 = gsbT(204, 211, 202);var P63 = gsbT(245, 232, 221);var P64 = gsbT(238, 211, 217)
var P71 = gsbT(245, 238, 230);var P72 = gsbT(255, 248, 227);var P73 = gsbT(243, 215, 202);var P74 = gsbT(230, 164, 180)
var P81 = gsbT(128, 188, 189);var P82 = gsbT(170, 217, 187);var P83 = gsbT(213, 240, 193);var P84 = gsbT(249, 247, 201)
var P91 = gsbT(117, 106, 182);var P92 = gsbT(172, 135, 197);var P93 = gsbT(224, 174, 208);var P94 = gsbT(255, 229, 229)

const vintageSETTING = ['V', 6]
const pastelSETTING = ['P', 5]

function d(d){
    const element = []
    for (let i = 0; i < 10; i++) {
        const el = []
        for (let j = 1; j < d[1]; j++) {
            let ddd = d[0] + i + j;
            el.push(window[ddd]);
        }
        element.push(el)
    }
    return element
}

const vintage = d(vintageSETTING); // [[[c1],[c2],[c3],[c4],[c5]], ...]

const pastel = d(pastelSETTING);

// console.log(pastel[9][3]); // [255, 229, 229]

// 2개의 색상의 gsb 유사도 계산
function calDistance(c1, c2) { // c1 = [r, g, b]
    const rDiff = c1[0] - c2[0];
    const gDiff = c1[1] - c2[1];
    const bDiff = c1[2] - c2[2];
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

// 색상 속 gsb 비율(1) (전체 중 차지 비율) 계산
function colRatio(c) { // c = [r, g, b]
    const total = c[0] + c[1] + c[2];

    let rs, gs, bs

    if (c[0] / total * 100 > 80){ rs = "a" } else if (c[0] / total * 100 > 60){ rs = "b" } else if (c[0] / total * 100 > 40){ rs = "c" } else if (c[0] / total * 100 > 20){ rs = "d" } else { rs = "e" }
    if (c[1] / total * 100 > 80){ gs = "a" } else if (c[1] / total * 100 > 60){ gs = "b" } else if (c[1] / total * 100 > 40){ gs = "c" } else if (c[1] / total * 100 > 20){ gs = "d" } else { gs = "e" }
    if (c[2] / total * 100 > 80){ bs = "a" } else if (c[2] / total * 100 > 60){ bs = "b" } else if (c[2] / total * 100 > 40){ bs = "c" } else if (c[2] / total * 100 > 20){ bs = "d" } else { bs = "e" }

    return { r: Math.round(c[0] / total * 10000)/100, g: Math.round(c[1] / total * 10000)/100, b: Math.round(c[2] / total * 10000)/100, rs: rs, gs: gs, bs: bs };
}

// 색상 속 gsb 비율(2) (원색에 가까운 정도) 계산
function gsbRatio(c) { // c = [r, g, b]
    let rs, gs, bs

    if (c[0] / 255 * 100 > 80){ rs = "a" } else if (c[0] / 255 * 100 > 60){ rs = "b" } else if (c[0] / 255 * 100 > 40){ rs = "c" } else if (c[0] / 255 * 100 > 20){ rs = "d" } else { rs = "e" }
    if (c[1] / 255 * 100 > 80){ gs = "a" } else if (c[1] / 255 * 100 > 60){ gs = "b" } else if (c[1] / 255 * 100 > 40){ gs = "c" } else if (c[1] / 255 * 100 > 20){ gs = "d" } else { gs = "e" }
    if (c[2] / 255 * 100 > 80){ bs = "a" } else if (c[2] / 255 * 100 > 60){ bs = "b" } else if (c[2] / 255 * 100 > 40){ bs = "c" } else if (c[2] / 255 * 100 > 20){ bs = "d" } else { bs = "e" }

    return { r: Math.round(c[0] / 255 * 10000)/100, g: Math.round(c[1] / 255 * 10000)/100, b: Math.round(c[2] / 255 * 10000)/100, rs: rs, gs: gs, bs: bs };
}

// 색상 모음의 gsb 비율(1) 평균 계산
function colRatioAvg(colors){ // colors = [c1, c2, c3, c4 ...]
    const ratios = colors.map(c => colRatio(c));

    const AvgR = ratios.reduce((sum, ratio) => sum + ratio.r, 0) / ratios.length
    const AvgG = ratios.reduce((sum, ratio) => sum + ratio.g, 0) / ratios.length
    const AvgB = ratios.reduce((sum, ratio) => sum + ratio.b, 0) / ratios.length
    
    let rs, gs, bs

    if (AvgR > 80){ rs = "a" } else if (AvgR > 60){ rs = "b" } else if (AvgR > 40){ rs = "c" } else if (AvgR > 20){ rs = "d" } else { rs = "e" }
    if (AvgG > 80){ gs = "a" } else if (AvgG > 60){ gs = "b" } else if (AvgG > 40){ gs = "c" } else if (AvgG > 20){ gs = "d" } else { gs = "e" }
    if (AvgB > 80){ bs = "a" } else if (AvgB > 60){ bs = "b" } else if (AvgB > 40){ bs = "c" } else if (AvgB > 20){ bs = "d" } else { bs = "e" }

    return { AvgR: Math.round(AvgR* 100)/100, AvgG: Math.round(AvgG* 100)/100, AvgB: Math.round(AvgB* 100)/100, rs: rs, gs: gs, bs: bs }
}

// 색상 모음의 gsb 비율(2) 평균 계산
function gsbRatioAvg(colors){ // colors = [c1, c2, c3, c4 ...]
    const ratios = colors.map(c => gsbRatio(c));

    const AvgR = ratios.reduce((sum, ratio) => sum + ratio.r, 0) / ratios.length
    const AvgG = ratios.reduce((sum, ratio) => sum + ratio.g, 0) / ratios.length
    const AvgB = ratios.reduce((sum, ratio) => sum + ratio.b, 0) / ratios.length

    let rs, gs, bs

    if (AvgR > 80){ rs = "a" } else if (AvgR > 60){ rs = "b" } else if (AvgR > 40){ rs = "c" } else if (AvgR > 20){ rs = "d" } else { rs = "e" }
    if (AvgG > 80){ gs = "a" } else if (AvgG > 60){ gs = "b" } else if (AvgG > 40){ gs = "c" } else if (AvgG > 20){ gs = "d" } else { gs = "e" }
    if (AvgB > 80){ bs = "a" } else if (AvgB > 60){ bs = "b" } else if (AvgB > 40){ bs = "c" } else if (AvgB > 20){ bs = "d" } else { bs = "e" }
    
    return { AvgR: Math.round(AvgR* 100)/100, AvgG: Math.round(AvgG* 100)/100, AvgB: Math.round(AvgB* 100)/100, rs: rs, gs: gs, bs: bs }
}

// document.getElementById("result").innerHTML = vintage[0][1][1]

function result(color) {
    const result = [];
    for (let i = 0; i < color.length; i++) {
        const res1 = [];
        const res2 = [];
        for (let j = 0; j < color[i].length; j++) {
            let k1 = colRatio(color[i][j])
            let k2 = gsbRatio(color[i][j])
            res1.push([k1,k2])
        }
        let k3 = colRatioAvg(color[i])
        let k4 = gsbRatioAvg(color[i])
        res2.push([k3, k4])
        result.push([res1, res2])
    }
    console.log(result)
    let article = "";

    for (let i = 0; i < result.length; i++) {
        let ar = "<div class = 'color'><table><tr><th colspan='2'>색상</th><th>R</th><th>G</th><th>B</th></tr><tr>"

        for (let j = 0; j < result[i][0].length; j++) {
            let colr = color[i][j][0]
            let colg = color[i][j][1]
            let colb = color[i][j][2]
            ar += `
                <td rowspan="2"><span style="color: rgb(${colr}, ${colg}, ${colb})">■</span></td>
                <td>전체 red, green, blue 중 차지하는 비율</td>
                <td class='${result[i][0][j][0].rs}'>${result[i][0][j][0].r}%</td>
                <td class='${result[i][0][j][0].gs}'>${result[i][0][j][0].g}%</td>
                <td class='${result[i][0][j][0].bs}'>${result[i][0][j][0].b}%</td></tr><tr>
                <td class='g'>red, green, blue 존재 비율</td>
                <td class='${result[i][0][j][1].rs}'>${result[i][0][j][1].r}%</td>
                <td class='${result[i][0][j][1].gs}'>${result[i][0][j][1].g}%</td>
                <td class='${result[i][0][j][1].bs}'>${result[i][0][j][1].b}%</td></tr><tr>
            `
        }

        ar += "<td rowspan='2'>평균</td><td>전체 red, green, blue 중 차지하는 비율 평균 </td>"
        ar += `<td class='${result[i][1][0][0].rs}'>${result[i][1][0][0].AvgR}%</td>`
        ar += `<td class='${result[i][1][0][0].gs}'>${result[i][1][0][0].AvgG}%</td>`
        ar += `<td class='${result[i][1][0][0].bs}'>${result[i][1][0][0].AvgB}%</td></tr><tr>`

        ar += `<td class='g'>red, green, blue 존재 비율 평균 </td>`
        ar += `<td class='${result[i][1][0][1].rs}'>${result[i][1][0][1].AvgR}%</td>`
        ar += `<td class='${result[i][1][0][1].gs}'>${result[i][1][0][1].AvgG}%</td>`
        ar += `<td class='${result[i][1][0][1].bs}'>${result[i][1][0][1].AvgB}%</td></tr></table>`

        article += ar + "</div>"
    }

    document.getElementById("result").innerHTML = `${article}`
}

document.getElementById("vintage").addEventListener("click", ()=>{
    result(vintage)
})
document.getElementById("pastel").addEventListener("click", ()=>{
    result(pastel)
})


//document.getElementById("result").innerHTML = calDistance(vintage[0][1], vintage[0][2])

//console.log(vintage)