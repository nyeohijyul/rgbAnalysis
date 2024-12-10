function rgbT(a,b,c) {
    return [a,b,c];
}

// vintage
var V11 = rgbT(112,048,048);var V12 = rgbT(047,052,059);var V13 = rgbT(126,130,122);var V14 = rgbT(227,205,164);var V15 = rgbT(199,121,102)
var V21 = rgbT(094,140,101);var V22 = rgbT(166,155,125);var V23 = rgbT(244,226,204);var V24 = rgbT(157,123,111);var V25 = rgbT(140,070,063)
var V31 = rgbT(193,111,080);var V32 = rgbT(235,220,200);var V33 = rgbT(134,105,076);var V34 = rgbT(224,203,177);var V35 = rgbT(109,091,084)
var V41 = rgbT(089,067,054);var V42 = rgbT(166,108,075);var V43 = rgbT(219,180,137);var V44 = rgbT(162,137,106);var V45 = rgbT(117,111,089)
var V51 = rgbT(166,150,119);var V52 = rgbT(064,059,051);var V53 = rgbT(191,138,073);var V54 = rgbT(217,191,160);var V55 = rgbT(013,013,013)
var V61 = rgbT(146,134,120);var V62 = rgbT(160,207,174);var V63 = rgbT(248,224,171);var V64 = rgbT(194,123,112);var V65 = rgbT(078,055,068)
var V71 = rgbT(217,106,126);var V72 = rgbT(064,038,043);var V73 = rgbT(166,056,086);var V74 = rgbT(217,194,167);var V75 = rgbT(217,172,163)
var V81 = rgbT(140,022,044);var V82 = rgbT(146,166,104);var V83 = rgbT(242,129,087);var V84 = rgbT(217,054,054);var V85 = rgbT(064,020,020)
var V91 = rgbT(028,066,073);var V92 = rgbT(138,184,162);var V93 = rgbT(250,255,219);var V94 = rgbT(199,175,063);var V95 = rgbT(041,045,048)
var V01 = rgbT(001,017,038);var V02 = rgbT(004,050,089);var V03 = rgbT(035,110,140);var V04 = rgbT(252,201,189);var V05 = rgbT(242,087,100)
// pastel
var P01 = rgbT(203, 157, 240);var P02 = rgbT(240, 193, 225);var P03 = rgbT(253, 219, 187);var P04 = rgbT(255, 249, 191)
var P11 = rgbT(191, 236, 255);var P12 = rgbT(205, 193, 255);var P13 = rgbT(255, 246, 227);var P14 = rgbT(255, 204, 234)
var P21 = rgbT(255, 247, 209);var P22 = rgbT(255, 236, 200);var P23 = rgbT(255, 208, 155);var P24 = rgbT(255, 176, 176)
var P31 = rgbT(231, 204, 204);var P32 = rgbT(237, 232, 220);var P33 = rgbT(165, 182, 141);var P34 = rgbT(193, 207, 161)
var P41 = rgbT(229, 217, 242);var P42 = rgbT(245, 239, 255);var P43 = rgbT(205, 193, 255);var P44 = rgbT(165, 148, 249)
var P51 = rgbT(240, 168, 208);var P52 = rgbT(247, 181, 202);var P53 = rgbT(255, 198, 198);var P54 = rgbT(255, 235, 212)
var P61 = rgbT(181, 192, 208);var P62 = rgbT(204, 211, 202);var P63 = rgbT(245, 232, 221);var P64 = rgbT(238, 211, 217)
var P71 = rgbT(245, 238, 230);var P72 = rgbT(255, 248, 227);var P73 = rgbT(243, 215, 202);var P74 = rgbT(230, 164, 180)
var P81 = rgbT(128, 188, 189);var P82 = rgbT(170, 217, 187);var P83 = rgbT(213, 240, 193);var P84 = rgbT(249, 247, 201)
var P91 = rgbT(117, 106, 182);var P92 = rgbT(172, 135, 197);var P93 = rgbT(224, 174, 208);var P94 = rgbT(255, 229, 229)

const vintageSETTING = ['V', 6, 10] // [앞문자, 묶음 단위+1, 있는 개수]
const pastelSETTING = ['P', 5, 10] // (P01 ~ P04)*10개 // ~ P94까지

function d(d){
    const element = []
    for (let i = 0; i < d[2]; i++) {
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

// 2개의 색상의 gsb 유사도 계산 // 사용 안함함
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

    let r = c[0] / total * 100
    let g = c[1] / total * 100
    let b = c[2] / total * 100

    if (r > 80){ rs = "a" } else if (r > 60){ rs = "b" } else if (r > 40){ rs = "c" } else if (r > 20){ rs = "d" } else { rs = "e" }
    if (g > 80){ gs = "a" } else if (g > 60){ gs = "b" } else if (g > 40){ gs = "c" } else if (g > 20){ gs = "d" } else { gs = "e" }
    if (b > 80){ bs = "a" } else if (b > 60){ bs = "b" } else if (b > 40){ bs = "c" } else if (b > 20){ bs = "d" } else { bs = "e" }

    if (r > g && r > b) { rs += " u"} else if (g > r && g > b) { gs += " u"} else {bs += " u"}

    return { r: Math.round(r * 100)/100, g: Math.round(g * 100)/100, b: Math.round(b * 100)/100, rs: rs, gs: gs, bs: bs };
}

// 색상 속 gsb 비율(2) (원색에 가까운 정도) 계산
function gsbRatio(c) { // c = [r, g, b]
    let rs, gs, bs

    let r = c[0] / 255 * 100
    let g = c[1] / 255 * 100
    let b = c[2] / 255 * 100

    if (r > 80){ rs = "a" } else if (r > 60){ rs = "b" } else if (r > 40){ rs = "c" } else if (r > 20){ rs = "d" } else { rs = "e" }
    if (g > 80){ gs = "a" } else if (g > 60){ gs = "b" } else if (g > 40){ gs = "c" } else if (g > 20){ gs = "d" } else { gs = "e" }
    if (b > 80){ bs = "a" } else if (b > 60){ bs = "b" } else if (b > 40){ bs = "c" } else if (b > 20){ bs = "d" } else { bs = "e" }

    if (r > g && r > b) { rs += " u"} else if (g > r && g > b) { gs += " u"} else {bs += " u"}

    return { r: Math.round(r * 100)/100, g: Math.round(g * 100)/100, b: Math.round(b * 100)/100, rs: rs, gs: gs, bs: bs };
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

    if (AvgR > AvgG && AvgR > AvgB) { rs += " u"} else if (AvgG > AvgR && AvgG > AvgB) { gs += " u"} else {bs += " u"}

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

    if (AvgR > AvgG && AvgR > AvgB) { rs += " u"} else if (AvgG > AvgR && AvgG > AvgB) { gs += " u"} else {bs += " u"}
    
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

    if (AvgR > AvgG && AvgR > AvgB) { rs += " u"} else if (AvgG > AvgR && AvgG > AvgB) { gs += " u"} else {bs += " u"}
    
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
                <td rowspan="2" style="background-color: rgb(${colr}, ${colg}, ${colb})"></td>
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

        ar += "<td rowspan='2'>평균</td><td>전체 red, green, blue 중 차지하는 비율</td>"
        ar += `<td class='${result[i][1][0][0].rs}'>${result[i][1][0][0].AvgR}%</td>`
        ar += `<td class='${result[i][1][0][0].gs}'>${result[i][1][0][0].AvgG}%</td>`
        ar += `<td class='${result[i][1][0][0].bs}'>${result[i][1][0][0].AvgB}%</td></tr><tr>`

        ar += `<td class='g'>red, green, blue 존재 비율</td>`
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

//romantic 
var RO01 = rgbT(247,197,200);var RO02 = rgbT(248,197,184);var RO03 = rgbT(253,214,179);var RO04 = rgbT(255,246,199);var RO05 = rgbT(240,241,198);var RO06 = rgbT(209,201,223);var RO07 = rgbT(226,191,212);var RO08 = rgbT(250,193,134);var RO09 = rgbT(255,234,154);var RO010 = rgbT(198,218,135);var RO011 = rgbT(150,200,172);var RO012 = rgbT(237,157,173);var RO013 = rgbT(64,164,113);var RO014 = rgbT(0,157,165);var RO015 = rgbT(38,38,159);
var RO016 = rgbT(209,107,144);
const romanticSETTING = ['RO', 17, 1]
const romantic = d(romanticSETTING);
document.getElementById("romantic").addEventListener("click",()=>{result(romantic)})
