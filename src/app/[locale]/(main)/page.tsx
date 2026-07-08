'use client';
import { useQuery } from '@apollo/client/react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { Icon, Loading, Typography } from '@/components';
import { defaultButtonClasses } from '@/components/atoms/Button/Button';
import IconBox from '@/components/molecules/IconBox/IconBox';
import { GetSentences } from '@/graphql/gql/main-gql';
import { FEATURES } from '@/utils/constants';

interface SentenceData {
	sentence?: {
		id: string;
		quote?: string | null;
		author?: string | null;
	};
}

export default function HomePage() {
	const t = useTranslations('HomePage');
	const { data, loading } = useQuery<SentenceData>(GetSentences, {
		fetchPolicy: 'network-only',
	});

	return (
		<div className="mx-auto flex w-full max-w-5xl flex-col">
			{/* Hero Section */}
			<section className="flex w-full items-center justify-center px-6 py-16">
				<div className="mx-auto flex w-full flex-col items-center gap-8 text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-br-regular bg-background-component px-4 py-2 text-sm font-medium">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
						</span>
						{t('badge')}
					</div>

					<div className="flex flex-col gap-6">
						<div className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
							<Typography.Title
								level="h1"
								className="text-5xl font-bold sm:text-6xl lg:text-7xl"
							>
								{t('title')}
							</Typography.Title>
						</div>

						<Typography.Paragraph className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
							{t('description')}
						</Typography.Paragraph>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row">
						<a
							href="https://github.com/shdezhahanj/nextjs-graphql-quickstart"
							target="_blank"
							className={classNames(
								'cursor-pointer justify-center gap-3 transition-all hover:scale-105 hover:shadow-xl',
								defaultButtonClasses.contained.primary,
							)}
							rel="noreferrer"
						>
							<Icon name="GitHub" className="my-auto" size="1.3em" />
							<span className="my-auto font-semibold">{t('viewSource')}</span>
						</a>
					</div>
				</div>
			</section>

			{/* Quote Section */}
			<section className="w-full px-6 py-12">
				<div className="mx-auto w-full">
					{!loading ? (
						<div className="group relative">
							<div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-30 blur transition duration-700 group-hover:opacity-50" />
							<div className="relative flex flex-col gap-6 rounded-2xl border border-br-regular bg-background-component p-8 sm:p-12">
								<Icon
									name="React"
									size="7em"
									className="absolute right-6 top-6 opacity-10 text-text-secondary sm:right-10 sm:top-10"
								/>
								<Typography.Paragraph className="relative z-10 text-xl italic leading-relaxed sm:text-2xl">
									"{data?.sentence?.quote}"
								</Typography.Paragraph>
								<div className="flex items-center gap-3">
									<div className="h-px flex-1 bg-br-regular" />
									<Typography.Text className="text-base font-semibold text-primary sm:text-lg">
										{data?.sentence?.author}
									</Typography.Text>
									<div className="h-px flex-1 bg-br-regular" />
								</div>
							</div>
						</div>
					) : (
						<div className="flex justify-center py-16">
							<Loading />
						</div>
					)}
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="w-full px-6 py-16">
				<div className="mx-auto w-full max-w-6xl">
					<div className="mb-12 flex flex-col items-center gap-4 text-center">
						<Typography.Title
							level="h2"
							className="text-3xl font-bold sm:text-4xl lg:text-5xl"
						>
							{t('techStack')}
						</Typography.Title>
						<Typography.Paragraph className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg">
							{t('techStackDescription')}
						</Typography.Paragraph>
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
						{FEATURES.map((item, index) => (
							<div
								key={item.id}
								className="animate-fade-in"
								style={{
									animationDelay: `${index * 50}ms`,
									animationFillMode: 'backwards',
								}}
							>
								<IconBox icon={item.icon} title={item.title} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="w-full px-6 py-16">
				<div className="mx-auto w-full rounded-2xl border border-br-regular bg-background-component p-12 text-center">
					<div className="flex flex-col items-center gap-6">
						<Typography.Title
							level="h3"
							className="text-2xl font-bold sm:text-3xl"
						>
							{t('readyToStart')}
						</Typography.Title>
						<Typography.Paragraph className="mx-auto max-w-xl text-text-secondary">
							{t('readyDescription')}
						</Typography.Paragraph>
						<a
							href="https://github.com/shdezhahanj/nextjs-graphql-quickstart"
							target="_blank"
							className={classNames(
								'cursor-pointer justify-center gap-3 transition-all hover:scale-105 hover:shadow-xl',
								defaultButtonClasses.contained.primary,
							)}
							rel="noreferrer"
						>
							<Icon name="GitHub" className="my-auto" size="1.3em" />
							<span className="my-auto font-semibold">{t('starOnGitHub')}</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
