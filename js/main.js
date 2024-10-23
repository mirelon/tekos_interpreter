// https://docs.google.com/spreadsheets/d/1i1IaiWhS1Qwvrr9wcCYkDSlaTKq-coO9pJ0XZ6ETpDM/edit
const raw = {
  "6A": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\n"
    + "95\t280\t291\t479\t501\t510\t546\t550\t585\t586\t591\t596\t597\t606\t610\n"
    + "90\t228\t253\t270\t370\t392\t500\t510\t550\t571\t579\t580\t589\t599\t604\n"
    + "75\t118\t130\t200\t340\t345\t428\t472\t500\t508\t539\t548\t556\t560\t584\n"
    + "50\t65\t67\t99\t193\t235\t287\t313\t460\t470\t482\t493\t500\t520\t542\n"
    + "25\t23\t41\t55\t73\t126\t168\t185\t253\t263\t270\t300\t320\t340\t481\n"
    + "10\t13\t20\t33\t46\t48\t61\t92\t116\t168\t180\t225\t250\t260\t270\n"
    + "5\t11\t12\t19\t25\t29\t30\t58\t70\t85\t107\t125\t150\t180\t220",
  "6B": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\n"
    + "95\t250\t300\t350\t504\t532\t535\t571\t580\t590\t599\t600\t601\t608\t610\n"
    + "90\t229\t250\t270\t423\t462\t470\t523\t530\t554\t560\t576\t580\t599\t600\n"
    + "75\t126\t130\t140\t361\t370\t375\t436\t450\t500\t529\t530\t540\t573\t580\n"
    + "50\t41\t67\t80\t139\t150\t190\t200\t325\t400\t470\t470\t480\t485\t515\n"
    + "25\t19\t25\t30\t63\t80\t100\t111\t173\t250\t297\t316\t320\t410\t450\n"
    + "10\t7\t10\t14\t22\t37\t40\t49\t89\t100\t110\t115\t151\t160\t190\n"
    + "5\t5\t8\t11\t15\t18\t25\t35\t38\t40\t48\t50\t55\t60\t70",
  "7A": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\n"
    + "95\t523\t560\t570\t589\t590\t600\t602\t608\t609\t609\t609\t609\t609\t610\n"
    + "90\t510\t512\t514\t530\t560\t591\t599\t600\t602\t602\t605\t605\t605\t606\n"
    + "75\t441\t450\t475\t525\t555\t563\t564\t582\t585\t591\t591\t591\t599\t592\n"
    + "50\t364\t367\t386\t471\t480\t501\t507\t552\t560\t563\t567\t568\t570\t577\n"
    + "25\t281\t283\t334\t390\t412\t420\t460\t491\t507\t527\t543\t545\t550\t555\n"
    + "10\t252\t253\t259\t335\t340\t340\t350\t370\t443\t490\t491\t492\t495\t495\n"
    + "5\t197\t200\t250\t280\t314\t310\t315\t350\t438\t470\t473\t475\t477\t480",
  "7B": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\n"
    + "95\t580\t585\t586\t587\t589\t590\t597\t601\t602\t606\t608\t609\t610\t610\n"
    + "90\t551\t560\t560\t569\t582\t584\t589\t594\t599\t600\t603\t604\t607\t609\n"
    + "75\t454\t513\t513\t520\t549\t555\t570\t579\t580\t588\t589\t591\t592\t599\n"
    + "50\t369\t414\t440\t453\t503\t510\t517\t533\t540\t568\t572\t570\t580\t582\n"
    + "25\t244\t308\t313\t315\t428\t430\t440\t482\t483\t517\t517\t520\t545\t545\n"
    + "10\t135\t284\t294\t300\t327\t351\t351\t367\t438\t440\t447\t448\t450\t466\n"
    + "5\t117\t197\t242\t250\t276\t280\t320\t330\t350\t351\t352\t352\t353\t354",
  "8": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\t31\t32\t33\t34\t35\n"
    + "95\t11\t13\t21\t22\t23\t23\t27\t29\t29\t30\t30\t30\t31\t31\t31\t31\t31\t31\t31\n"
    + "90\t6\t9\t17\t22\t22\t22\t26\t27\t29\t29\t29\t30\t30\t30\t30\t31\t31\t30\t31\n"
    + "75\t2\t3\t7\t13\t15\t16\t21\t23\t23\t26\t27\t27\t29\t29\t30\t30\t30\t29\t29\n"
    + "50\t1\t1\t2\t5\t6\t6\t10\t17\t19\t21\t25\t25\t25\t27\t27\t29\t27\t27\t27\n"
    + "25\t0\t0\t0\t1\t2\t2\t5\t7\t12\t14\t17\t17\t20\t20\t20\t23\t23\t23\t22\n"
    + "10\t0\t0\t0\t0\t0\t0\t0\t2\t3\t5\t5\t6\t6\t6\t9\t17\t17\t17\t17\n"
    + "5\t0\t0\t0\t0\t0\t0\t0\t0\t1\t1\t2\t2\t2\t2\t5\t13\t14\t14\t14",
  "9": "Percentily\t17\t18\t19\t20\t21\t22\t23\t24\t25\t26\t27\t28\t29\t30\n"
    + "95\t4.66\t6.95\t6.95\t7.67\t9.35\t11.45\t16\t17.05\t18.07\t19.5\t19.5\t19.8\t22\t22\n"
    + "90\t3.73\t5.9\t6\t7\t8.03\t9.4\t13.27\t13.37\t14\t16.5\t16.5\t16.9\t18.9\t19\n"
    + "75\t3.17\t3.92\t4\t4.3\t5.41\t5.54\t6.17\t10\t10\t10.05\t10.9\t11\t13.25\t13.67\n"
    + "50\t1\t2\t2.42\t2.5\t2.92\t3\t3.67\t6.33\t6.67\t7.3\t7.83\t8\t9\t9\n"
    + "25\t1\t1\t1\t1\t1\t1\t1\t1.33\t3.67\t3.67\t4\t4\t4\t4\n"
    + "10\t0\t0\t0\t0\t0\t0\t0\t1\t1\t1\t1\t1\t1\t1\n"
    + "5\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0\t0"
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

console.info(data)

function calculate_percentil(dataset, vek, skore) {
  for (const percentil in dataset[vek]) {
    if (skore <= dataset[vek][percentil]) {
      return percentil
    }
  }
  return 99
}

function ocakavany_vek_od(dataset, skore) {
  var last = parseInt(Object.keys(dataset)[0]) - 1
  for (const vek in dataset) {
    if (dataset[vek][75] > skore) {
      return last
    }
    last = vek
  }
  return last
}

function ocakavany_vek_do(dataset, skore) {
  var last = parseInt(Object.keys(dataset)[0]) - 1
  for (const vek in dataset) {
    if (dataset[vek][25] >= skore && dataset[vek][50] > skore) {
      return last
    }
    last = vek
  }
  return last
}

function evaluate(subtest, pohlavie, vek, skore) {
  const datasetKey = subtest + (["6", "7"].includes(subtest) ? pohlavie : '')
  const dataset = data[subtest + (["6", "7"].includes(subtest) ? pohlavie : '')]
  if (dataset == null) throw new Error(`Invalid datasetKey ${datasetKey}`)
  const percentil = calculate_percentil(dataset, vek, skore)
  const percentilElement = document.querySelector(`#subtestRow${subtest} .percentil`)
  percentilElement.style.color = (percentil < 25) ? 'red' : 'black'
  percentilElement.textContent = percentil
  vek2 = ocakavany_vek_do(dataset, skore)
  vek2_od = ocakavany_vek_od(dataset, skore)
  const vek2Element = document.querySelector(`#subtestRow${subtest} .vek2`)
  vek2Element.textContent = (vek2 === vek2_od) ? vek2 : (vek2_od + ' - ' + vek2)
  const oneskorenie = Math.max(0, vek - vek2)
  const oneskorenieElement = document.querySelector(`#subtestRow${subtest} .oneskorenie`)
  oneskorenieElement.style.color = (oneskorenie > 5) ? 'red' : 'black'
  oneskorenieElement.textContent = oneskorenie
}


const skoreInputs = document.querySelectorAll('input.skore')
skoreInputs.forEach(input => {
  input.addEventListener('change', function() {
    const subtest = input.getAttribute('subtest')
    const pohlavie = document.querySelector('input[name=pohlavie]').value
    const vek = parseInt(document.querySelector('#vek').value)
    const skore = parseFloat(input.value)
    evaluate(subtest, pohlavie, vek, skore)
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const tableRows = document.querySelectorAll('tbody tr')
  tableRows.forEach(row => {
    const subtest = row.getAttribute('id').slice(-1)
    const skoreInput = row.querySelector('.skore')
    skoreInput.setAttribute('placeholder', `Skore ${subtest}`)
    skoreInput.setAttribute('subtest', subtest)
  })
})
