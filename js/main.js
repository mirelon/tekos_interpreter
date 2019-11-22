// https://docs.google.com/spreadsheets/d/1i1IaiWhS1Qwvrr9wcCYkDSlaTKq-coO9pJ0XZ6ETpDM/edit
const raw = {
  "6A": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\n"
    + "95\t280\t291\t479\t501\t510\t546\t550\t585\t586\t591\t596\t597\t606\t610\n"
    + "90\t228\t253\t270\t370\t392\t500\t510\t550\t571\t579\t580\t589\t599\t604\n"
    + "75\t118\t130\t200\t340\t345\t428\t472\t500\t508\t539\t548\t556\t560\t584\n"
    + "50\t65\t67\t99\t193\t235\t287\t313\t460\t470\t482\t493\t500\t520\t542\n"
    + "25\t23\t41\t55\t73\t126\t168\t185\t253\t263\t270\t300\t320\t340\t481\n"
    + "10\t13\t20\t33\t46\t48\t61\t92\t116\t168\t180\t225\t250\t260\t270\n"
    + "5\t11\t12\t19\t25\t29\t30\t58\t70\t85\t107\t125\t150\t180\t220"
}

var data = {}

for (const key in raw) {
  data[key] = {}
  const rows = raw[key].split("\n")
  const cells = rows.map(row => row.split("\t"))
  const veky = cells[0].slice(1)
  for (const vek of veky) {
    data[key][parseInt(vek)] = {}
  }
  for (const row of cells.slice(1)) {
    const percentil = parseInt(row[0])
    for (i in row.slice(1)) {
      data[key][parseInt(veky[i])][percentil] = parseInt(row.slice(1)[i])
    }
  }
}

function calculate_percentil(dataset, vek, skore) {
  for (const percentil in dataset[vek]) {
    if (skore <= dataset[vek][percentil]) {
      return percentil
    }
  }
  return '?'
}

function ocakavany_vek(dataset, skore) {
  for (const vek in dataset) {
    if (dataset[vek][25] > skore) {
      return vek - 1
    }
  }
  return '?'
}

function evaluate(subtest, pohlavie, vek, skore) {
  const dataset = data[subtest + (["6", "7"].includes(subtest) ? pohlavie : '')]
  const percentil = calculate_percentil(dataset, vek, skore)
  $("#" + subtest + " .percentil").css('color', (percentil < 25) ? 'red' : 'black')
  $("#" + subtest + " .percentil").text(percentil)
  vek2 = ocakavany_vek(dataset, skore)
  $("#" + subtest + " .vek2").text(vek2)
  const oneskorenie = vek - vek2
  $("#" + subtest + " .oneskorenie").css('color', (oneskorenie > 5) ? 'red' : 'black')
  $("#" + subtest + " .oneskorenie").text(oneskorenie)

}

$('input.skore').on('change', function() {
  evaluate($(this).attr('subtest'), $('input[name=pohlavie]').val(), parseInt($('#vek').val()), parseInt($(this).val()))
})

$(function() {
  $('tbody tr').each(function(i, el) {
    $(el).find('.subtest').text($(el).attr('id'))
    $(el).find('.skore').attr('placeholder', 'Skore ' + $(el).attr('id'))
    $(el).find('.skore').attr('subtest', $(el).attr('id'))
  })
})
