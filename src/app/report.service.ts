import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }
  calExpense(arr : any[]){
    if (!Array.isArray(arr)) {
      throw new Error('Expected an array as input');
    }
    let result = new Map();
    let sortedArr=[...arr];
    sortedArr=sortedArr.sort((a,b)=>a.amount-b.amount);
    for(let i=sortedArr.length-1;i>0;i--)
    {
      const amount=sortedArr[i].amount/ sortedArr.length;
      for(let j=0;j<i;j++)
      {
        const amount1= sortedArr[j].amount/sortedArr.length;
        if(amount-amount1>0)
        {
          let transaction=null;
          if(result.has(sortedArr[j].name))
          {
            transaction=result.get(sortedArr[j].name)
          }
          else
            transaction=[];
          transaction.push({
            name: sortedArr[i].name,
            amount: sortedArr[i].amount
          })
          result.set(sortedArr[j].name,transaction);
        }
      }
    }
    console.log(result);
    return result;
  }
}
