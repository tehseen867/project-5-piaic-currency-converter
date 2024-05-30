#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.magenta('          WELLCOME  TO  CURRENCY  CONVERTER  APP'))

async function MyCrrencyConverter() {


    let currency: any = {
        USD: 1,
        EUR: 0.91,
        GBP: 0.79,
        CAD: 1.36,
        AUD: 1.50,
        JPY: 156.90,
        CNY: 7.24,
        CHF: 0.91,
        INR: 83.09,
        MXN: 17.05,
        BRL: 5.15,
        ZAR: 18.49,
        RUB: 89.71,
        SAR: 3.75,
        HKD: 7.81,
        SGD: 1.35,
        MYR: 4.71,
        TRY: 20.40,
        NZD: 1.64,
        NOK: 10.62,
        SEK: 10.69,
        PKR: 278.49,
        EGP: 30.85,
        KWD: 0.31,
        PHP: 58.64,
        THB: 36.93,
        IDR: 15213.85,
    }

    let convertCurrency = await inquirer.prompt([
        {
            name: 'from',
            type: 'list',
            message: chalk.green('please select currency you want to convert from'),
            choices: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CNY', 'CHF', 'INR', 'MXN', 'BRL', 'ZAR', 'RUB', 'SAR',
                'HKD', 'SGD', 'MYR', 'TRY', 'NZD', 'NOK', 'SEK', 'PKR', 'EGP', 'KWD', 'PHP', 'THB', 'IDR',]
        },

        {
            name: 'to',
            type: 'list',
            message: chalk.green('please select currency you want to convert to'),
            choices: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CNY', 'CHF', 'INR', 'MXN', 'BRL', 'ZAR', 'RUB', 'SAR',
                'HKD', 'SGD', 'MYR', 'TRY', 'NZD', 'NOK', 'SEK', 'PKR', 'EGP', 'KWD', 'PHP', 'THB', 'IDR',]
        },
    ])
    async function AMOUNT() {
        let EnterAmount = await inquirer.prompt([{
            name: 'amount',
            type: 'input',
            message: chalk.blueBright('enter amount ')
        }])


        if (isNaN(EnterAmount.amount)) {
            console.log(chalk.red("PLEASE ENTER AMOUNT IN VALID DIGIT"))
            AMOUNT();
        }

        else {
            let FromCurrency = currency[convertCurrency.from]
            let ToCurrency = currency[convertCurrency.to]
            let baseAmount = EnterAmount.amount / FromCurrency
            let TotalAmount = baseAmount * ToCurrency
            console.log(TotalAmount)
        }
    }
    AMOUNT()
}

MyCrrencyConverter()
