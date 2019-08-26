
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  let tag = document.createElement("p");
  let text = document.createTextNode(string);
  tag.appendChild(text);
  if (htmlElement.hasChildNodes()){
    htmlElement.removeChild(htmlElement.firstChild);
  }
  htmlElement.appendChild(tag);
};

// htmlGenerator('Party Time.', partyHeader);

module.exports = htmlGenerator;