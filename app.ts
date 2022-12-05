import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
/*peopleAccount.deposit(20)
peopleAccount.getBalance()
peopleAccount.withdraw(5)
peopleAccount.getBalance()*/
/*const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(15)
companyAccount.deposit(20)
companyAccount.getBalance()
companyAccount.withdraw(5)
companyAccount.getBalance()
companyAccount.getLoan(10)
companyAccount.getBalance()*/
const specialAccount: SpecialAccount = new SpecialAccount('spec', 20)
specialAccount.bonusDeposit(15)
specialAccount.getBalance()
