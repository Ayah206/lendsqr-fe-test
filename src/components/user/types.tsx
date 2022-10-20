export type education = {
    duration : string,
    employmentStatus : string,
    level : string,
    loanRepayment : string,
    officeEmail : string,
    sector : string,
    monthlyIncome: number[]
}
export type guarantor = {
    address : string,
    firstName : string,
    gender : string,
    lastName : string,
    phoneNumber : string
}
export type profile = {
    address : string,
    avatar : string,
    bvn : string,
    currency : string,
    firstName : string,
    gender : string,
    lastName : string,
    phoneNumber : string
}
export type socials = {
    facebook : string,
    instagram : string,
    twitter : string
}
export type user = {
    accountBalance: string,
    accountNumber: string,
    createdAt: Date,
    education: education,
    email: string,
    id: string,
    lastActiveDate: Date,
    orgName: string,
    phoneNumber: string,
    userName: string,
    guarantor: guarantor,
    profile: profile,
    socials: socials
    status?: string
}