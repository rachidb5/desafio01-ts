import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
    private static value = 10;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  bonusDeposit = (valor: number): void =>{
    if(super.validateStatus()){
        super.deposit(valor+SpecialAccount.value)
    }
  }
}