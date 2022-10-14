import React from 'react';
import {Users, Users1, Loans, Handshake, Savings, LoanRequest, Whitelist, Karma, Briefcase1, SavingsProducts, Coins, Transactions, Services, ServiceAccount, Scroll, Reports, Sliders, Percent, Audit } from '../assets/icons';
const MenuData = [
    {
        title : 'customers',
        details : [
            {icon : <Users/>, text : 'users'},
            {icon : <Users1/>, text : 'guarantors'},
            {icon : <Loans/>, text : 'Loans'},
            {icon : <Handshake/>, text : 'decision models'},
            {icon : <Savings/>, text : 'Savings'},
            {icon : <LoanRequest/>, text : 'Loan Request'},
            {icon : <Whitelist/>, text : 'Whitelist'},
            {icon : <Karma/>, text : 'Karma'}
        ]

    },
    {
        title : 'businesses',
        details : [
            {icon : <Briefcase1/>, text : 'ogarnisation'},
            {icon : <Loans/>, text : 'loan products'},
            {icon : <SavingsProducts/>, text : 'savings products'},
            {icon : <Coins/>, text : 'fees and charges'},
            {icon : <Transactions/>, text : 'transactions'},
            {icon : <Services/>, text : 'Services'},
            {icon : <ServiceAccount/>, text : 'service account'},
            {icon : <Scroll/>, text : 'settlments'},
            {icon : <Reports/>, text : 'reports'}
        ]

    },
    {
        title : 'settings',
        details : [
            {icon : <Sliders/>, text : 'preferences'},
            {icon : <Percent/>, text : 'fees and pricing'},
            {icon : <Audit/>, text : 'audit logs'}
        ]

    }
]

export default MenuData;