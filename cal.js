let output = document.getElementById("output");
output.value = "0";

function clearValue() {
  output.value = "";
}

function historyback() {
  output.value = output.value.slice(0, -1);
}

function addValue(value) {
  output.value += value;
}

function getResult() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = "Error";
  }
}
