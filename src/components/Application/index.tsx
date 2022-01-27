import React from 'react';
import IApplication from '../../types/Application';
import './Application.css';

const Application: React.FC<IApplication> = ({ id, name, spend }) => {

    interface IExchangeRates {
        [index: string]: number
    }

    const exchangeRates: IExchangeRates = {
        chf: 1.24,
        eur: 1.2,
        usd: 1.35
    };

    const convertCurrency = (currency: string): number => {
        let currencyValue: number = 0;
        currencyValue = Math.round(spend * exchangeRates[currency]);
        return currencyValue;
    };

    return (
        <div className="application" data-app-id={id}>
            <ul>
                <li>
                    <span>application name</span>
                    <span>{name}</span>
                </li>
                <li className="spend-gbp">
                    <span>total spend in gbp</span>
                    <span>{'£' + spend.toLocaleString('en')}</span>
                </li>
                <li className="spend-chf">
                    <span title={`1 British Pound = ${exchangeRates['chf']} Swiss Francs`}>total spend in chf ⓘ</span>
                    <span>{'Fr. ' + convertCurrency('chf').toLocaleString('en')}</span>
                </li>
                <li className="spend-eur">
                    <span title={`1 British Pound = ${exchangeRates['eur']} Euros`}>total spend in eur ⓘ</span>
                    <span>{'€' + convertCurrency('eur').toLocaleString('en')}</span>
                </li>
                <li className="spend-usd">
                    <span title={`1 British Pound = ${exchangeRates['usd']} US Dollars`}>total spend in usd ⓘ</span>
                    <span>{'$' + convertCurrency('usd').toLocaleString('en')}</span>
                </li>
            </ul>
        </div>
    )

};

export default Application;