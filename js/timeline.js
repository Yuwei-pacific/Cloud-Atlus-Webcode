// 1. 绘制饼图
d3.csv('./data/timelineCloudAtlus.csv').then((data => {
  // 声明颜色组
  const colorSet = [
    "#3A1906",
    "#846955",
    "#4F4E3D",
    "#8C7C79",
    "#BFC3C6",
    "#898970"
  ];

  // 声明高宽 边距
  const svg = d3.select('#mainsvg')

  const myHeight = svg.attr('height');
  const myWidth = svg.attr('width');

  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const innerHeight = myHeight - margin.top - margin.bottom;
  const innerWidth = myWidth - margin.right - margin.left;

  // 声明 d3.pie() 生成器
  const pie = d3
    .pie()
    .sort(null)
    .value((d) => d.second);

  // 为数据调用d3.pie()生成器
  const arcData = pie(data);

  // 声明圆环函数
  const arcPath = d3.arc().innerRadius(75).outerRadius(100);

  // 外部圆环函数
  const outPath = d3.arc().innerRadius(75).outerRadius(110);

  // 声明颜色比例尺
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.chapter))
    .range(colorSet);


  // ------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------sinistra-----------------------------------------------------------------
  svg
    .append("rect")
    .attr("height", myHeight)
    .attr("width", myWidth)
    .attr("fill", "#15181E");

  // 1. primo episodio
  svg
    .append("circle")
    .attr("class", "primoC left")
    .attr("cx", (myWidth / 9) * 1)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")

    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 1)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("1849")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 1)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Adam Ewing")
    .attr("fill", "#F2E8CF");

  // 2. secondo epiodio
  svg
    .append("circle")
    .attr("class", "secondoC left")
    .attr("cx", (myWidth / 9) * 2)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 2)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("1936")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 2)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Robert Frobisher")
    .attr("fill", "#F2E8CF");

  // 3. terzo episodio
  svg
    .append("circle")
    .attr("class", "terzoC left")
    .attr("cx", (myWidth / 9) * 3)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 3)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("1973")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 3)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Luisa Rey")
    .attr("fill", "#F2E8CF");

  // --------------------------------------------------destra----------------------------------------------------------------

  // 4. quatro episodio
  svg
    .append("circle")
    .attr("class", "quartoC right")
    .attr("cx", (myWidth / 9) * 6)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC right years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 6)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("2012")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC right name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 6)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Timothy Cavendish")
    .attr("fill", "#F2E8CF");

  // 5. quinto epiodio
  svg
    .append("circle")
    .attr("class", "quintoC right")
    .attr("cx", (myWidth / 9) * 7)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC right years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 7)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("2144")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC right name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 7)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("SOMNI-452")
    .attr("fill", "#F2E8CF");

  // 6. sesto episodio
  svg
    .append("circle")
    .attr("class", "sestoC right")
    .attr("cx", (myWidth / 9) * 8)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC right years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 8)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("2321")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC right name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 8)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Zachry")
    .attr("fill", "#F2E8CF")



  // ------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------centro--------------------------------------------------------------------

  // cerchio centro
  // svg
  //   .append("circle")
  //   .attr("cx", myWidth / 2)
  //   .attr("cy", myHeight / 2)
  //   .attr("r", 105)
  //   .attr("fill", "#F2E8CF")

  // svg
  //   .append("circle")
  //   .attr("cx", myWidth / 2)
  //   .attr("cy", myHeight / 2)
  //   .attr("r", 70)
  //   .attr("fill", "#15181E")

  svg
    .append("circle")
    .attr("cx", myWidth / 2)
    .attr("cy", myHeight / 2)
    .attr("r", 105)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF")

  // 绘制扇形
  svg
    .append("g")
    .selectAll("path")
    .data(arcData)
    .join("path")
    .attr("class", (d) => `chapter-${d.data.chapter}`)
    .attr("transform", `translate(${myWidth / 2},${myHeight / 2})`)
    .attr("d", arcPath)
    .attr("fill", (d) => color(d.data.chapter))
  // .attr("stroke", "#f2e8cf")
  // .attr("stroke-width", 0.1);

  // svg.selectAll(".chapter-1").attr("d", outPath);


  return svg.node();

}))

