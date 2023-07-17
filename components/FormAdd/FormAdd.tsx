'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CompanyType, ReferenceType, CompanyTypeDict, ReferenceTypeDict } from '@/types';

import { Form } from '@/components/Form';

import style from './FormAdd.module.scss'
import { SuccessFormMsg } from '@/components/SuccessFormMsg';

type FormInputProps = {
	company_type: CompanyType,
	company_url: string,
	company_telegram: string,
	type: ReferenceType,
	app_url: string,
	works: string[],
	other_work: string,
	year: string,
	about: string
}

export const FormAdd = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormInputProps>({
		//shouldUnregister: true
	});
	const [type, setType] = useState<ReferenceType>(ReferenceType.SITE);
	const siteWorks = [
		'Дизайн',
		'Front-end',
		'Back-end',
		'SEO продвижение',
		'Контекстная реклама',
	] as const;
	const appWorks = [
		'Дизайн',
		'Back-end',
		'SEO продвижение',
		'Контекстная реклама',
		'Android разработка',
		'iOS разработка',
	] as const;
	const [works, setWorks] = useState<typeof siteWorks | typeof appWorks | []>(siteWorks);	
	const [sended, setSended] = useState<boolean>(false);

	useEffect(() => {
		switch (type) {
			case ReferenceType.SITE:
				setWorks(siteWorks);
				break;
			case ReferenceType.APP:
				setWorks(appWorks);
				break;
			default:
				setWorks([]);
		}
	}, [type]);

	
	const onSubmit: SubmitHandler<FormInputProps> = (data) => {
		setSended(true);
	}

	if (sended)
		return <SuccessFormMsg />

	return (
		<Form
			action="#"
			name="form-add"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Form.Group>
				<div className="h2">Кто вы?</div>
				<Form.RadioField
					{...register('company_type', { required: true })}
					label={CompanyTypeDict.STUDIO}
					defaultValue={CompanyType.STUDIO}
					defaultChecked				
					error={errors.company_type}						
				/>
				<Form.RadioField
					{...register('company_type', { required: true })}
					label={CompanyTypeDict.FREELANCE}
					defaultValue={CompanyType.FREELANCE}				
					error={errors.company_type}	
				/>
				<Form.RadioField
					{...register('company_type', { required: true })}
					label={CompanyTypeDict.TEAM}
					defaultValue={CompanyType.TEAM}				
					error={errors.company_type}	
				/>				
				<Form.TextField
					{...register('company_url', { required: 'Заполните поле' })}
					type="url"
					placeholder="сайт/соц. сеть"					
					error={errors.company_url}					
				/>
				<Form.TextField
					{...register('company_telegram', { required: 'Заполните поле' })}
					placeholder="telegram*"				
					error={errors.company_telegram}	
					caption="*он не будет указан на сайте, это для нашей с вами связи"
				/>
			</Form.Group>

			<Form.Group>
				<div className="h2">Что добавить?</div>
				<Form.RadioField				
					{...register('type', { required: true })}
					label={ReferenceTypeDict.SITE}
					value={ReferenceType.SITE}
					checked={type === ReferenceType.SITE}
					onChange={() => setType(ReferenceType.SITE)}			
					error={errors.type}	
				/>
				<Form.RadioField
					{...register('type', { required: true })}
					label={ReferenceTypeDict.APP}
					value={ReferenceType.APP}
					checked={type === ReferenceType.APP}
					onChange={() => setType(ReferenceType.APP)}					
					error={errors.type}	
				/>
				<Form.RadioField
					{...register('type', { required: true })}
					label={ReferenceTypeDict.OTHER}
					value={ReferenceType.OTHER}
					checked={type === ReferenceType.OTHER}
					onChange={() => setType(ReferenceType.OTHER)}			
					error={errors.type}	
				/>
				{type !== ReferenceType.OTHER && (
					<Form.TextField						
						{...register('app_url', { required: 'Заполните поле' })}
						type="url"
						placeholder={type === ReferenceType.SITE ? 'ссылка на сайт' : 'ссылка на приложение'}										
						error={errors.app_url}	
					/>
				)}
			</Form.Group>

			<Form.Group>
				{type === ReferenceType.OTHER ? (
					<Form.TextareaField
						{...register('about', { required: 'Заполните поле' })}						
						error={errors.about}	
						placeholder="Расскажите о своём продукте ;)"
					/>
				) : (
					<>
						<div className="h2">Отметьте что сделали</div>
						<ul className={style.checkboxList}>
							{works.map((el) => (
								<li key={el}>
									<Form.CheckboxField										
										{...register('works')}
										defaultValue={el}
									/>
								</li>
							))}
						</ul>
						<Form.TextField
							{...register("other_work", {
								validate: (value, formValues) => !(value === '' && Object.keys(formValues.works).length == 0) || 'Отметьте пункты выше или заполните это поле'
						  	})}		
							error={errors.other_work}	
							placeholder="что-то другое?"
						/>
						<Form.TextField
							{...register('year')}	
							placeholder="год работы"
						/>
					</>
				)}
			</Form.Group>

            <Form.Group>
                 <Form.Submit text="Добавить сайт" />               
            </Form.Group>            
		</Form>
	);
};
