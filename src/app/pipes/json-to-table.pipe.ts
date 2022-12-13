import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsontotable'
})
export class JsonToTablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const htmlElements = [];
    if (typeof (value) !== "object" || !Array.isArray(value)) {
      htmlElements.push(`<div>Object is not an array to show in table view</div>`);
      return htmlElements.join('');
    }
    htmlElements.push("<table>")
    if (typeof (value[0]) === "object") {
      htmlElements.push(`<tr>${Object.keys(value[0]).map(k => `<th>${k}</th>`).join('')}</tr>`);
    }
    else{
      htmlElements.push(`<tr><th>Anonymous</th></tr>`);
    }
    value.forEach((m: any) => {
      if (typeof (m) === "object") {
        htmlElements.push(`<tr>${Object.values(m).map(k => `<td>${k}</td>`).join('')}</tr>`);       
      }
      else {
        htmlElements.push(`<tr>${Object.values(m).map(k => `<td>${k}</td>`).join('')}</tr>`);  
      }
    });
    htmlElements.push("</table>")
    return htmlElements.join('');
  }
  
}
