export { CompanyType, ReferenceType } from '@prisma/client';

export enum CompanyTypeDict {
	STUDIO = 'студия (компания)',
	FREELANCE = 'сам в поле воин (фрилансер)',
	TEAM = 'команда крутых ребят',
}

export enum ReferenceTypeDict {
	SITE = 'Сайт',
	APP = 'Мобильное приложение',
	OTHER = 'Другое',
}
