

window.setMobileTable = function(selector) {
  // if (window.innerWidth > 600) return false;
  const tableEl = document.querySelector(selector);
  const thEls = tableEl.querySelectorAll('thead th');
  const tdLabels = Array.from(thEls).map(el => el.innerText);
  tableEl.querySelectorAll('tbody tr').forEach( tr => {
    Array.from(tr.children).forEach( 
      (td, ndx) =>  td.setAttribute('label', tdLabels[ndx])
    );
  });
}
ngAfterViewInit() {
  const tableEl = this.elRef.nativeElement;
  const thEls = tableEl.querySelectorAll('thead th');
  const tdLabels = Array.from(thEls).map( (el:any) => el.innerText);
  tableEl.querySelectorAll('tbody tr').forEach( tr => {
    Array.from(tr.children).forEach(
      (td: any, ndx) =>  td.setAttribute('label', tdLabels[ndx])
    );
  });
}