import React from 'react';
import {Users, Users1, Loans, Handshake, Savings, LoanRequest, Whitelist, Karma, Briefcase1, SavingsProducts, Coins, Transactions, Services, ServiceAccount, Scroll, Reports, Sliders, Percent, Audit } from '../assets/icons';
const MenuData = [
    {
        title : 'customers',
        details : [
            {icon : <Users />, text : 'users'},
            {icon : <Users1 opacity = 'inherit' />, text : 'guarantors'},
            {icon : <Loans opacity = 'inherit' />, text : 'Loans'},
            {icon : <Handshake opacity = 'inherit'/>, text : 'decision models'},
            {icon : <Savings opacity = 'inherit' />, text : 'Savings'},
            {icon : <LoanRequest opacity = 'inherit' />, text : 'Loan Request'},
            {icon : <Whitelist opacity = 'inherit' />, text : 'Whitelist'},
            {icon : <Karma opacity = 'inherit' />, text : 'Karma'}
        ]

    },
    {
        title : 'businesses',
        details : [
            {icon : <Briefcase1 opacity = 'inherit' />, text : 'ogarnisation'},
            {icon : <Loans opacity = 'inherit' />, text : 'loan products'},
            {icon : <SavingsProducts opacity = 'inherit' />, text : 'savings products'},
            {icon : <Coins opacity = 'inherit' />, text : 'fees and charges'},
            {icon : <Transactions opacity = 'inherit' />, text : 'transactions'},
            {icon : <Services opacity = 'inherit' />, text : 'Services'},
            {icon : <ServiceAccount opacity = 'inherit' />, text : 'service account'},
            {icon : <Scroll/>, text : 'settlments'},
            {icon : <Reports/>, text : 'reports'}
        ]

    },
    {
        title : 'settings',
        details : [
            {icon : <Sliders opacity = 'inherit' />, text : 'preferences'},
            {icon : <Percent opacity = 'inherit' />, text : 'fees and pricing'},
            {icon : <Audit opacity = 'inherit' />, text : 'audit logs'}
        ]

    }
]

export default MenuData;