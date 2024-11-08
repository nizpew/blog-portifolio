import { Icon } from "@twilight-toolkit/ui"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import PagesAndLinks from "~/components/Banners/PagesAndLinks"
import EmploymentCard from "~/components/Card/Employment"
import PaperCard from "~/components/Card/Paper"
import List from "~/components/List"
import { pageLayout } from "~/components/Page"
import SubscriptionBox from "~/components/SubscriptionBox"
import Top from "~/components/Top"
import { NextPageWithLayout } from "~/pages/_app"

const Home: NextPageWithLayout = () => {
	const [showPosts, setShowPosts] = useState(false)
	const [maskClass, setMaskClass] = useState("mask-x-r")

	return (
		<>
			<Head>
				<title>Sávio Arbuês</title>
			</Head>
			<section className="mt-0 pt-24 lg:mt-20 lg:pt-0">
				<div className="flex items-center justify-between gap-x-10 gap-y-8">
					<div className="hidden flex-shrink-0 pt-1 lg:block">
						<Image
							src="/tony.png" // Substitua pela sua imagem de avatar
							height={131}
							width={131}
							alt="Sávio Arbuês"
							className="rounded-md bg-gray-200 shadow-sm dark:border dark:border-gray-600"
						/>
					</div>
					<div className="flex flex-col gap-y-1">
						<h1 className="flex items-center whitespace-nowrap break-words text-3xl font-medium tracking-wide text-black dark:text-white lg:text-[1.8rem]">
							<span className="mr-2.5 inline-block animate-waveHand cursor-pointer hover:animate-waveHandAgain">
								👋
							</span>
							Olá, bem-vindo!
						</h1>
						<div className="flex flex-col gap-y-1.5 break-words px-1 text-justify text-4 font-light leading-relaxed tracking-wide text-gray-500 dark:text-gray-300 lg:text-2">
							<p>
								Meu nome é Sávio Arbuês, sou estudante 🎓, engenheiro de software 💻 e pesquisador 🔬 atualmente estudando no{" "}
								<a
									href="https://ceub.br"
									target="_blank"
									className="inline-flex items-center gap-x-1 transition-colors hover:text-blue-500 dark:hover:text-blue-500">
									Centro Universitário de Brasília
									<span className="flex h-5 w-5">
										<Icon name="externalLink" />
									</span>
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-10">
				<div className="mt-6">
					<Top />
				</div>
			</section>
			<section className="mt-6">
				<div className="mt-5">
					<div className="mt-4">
						<PagesAndLinks />
					</div>
				</div>
			</section>
			<section className="mt-16">
				<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
					<span className="mr-1.5 flex h-5 w-5">
						<Icon name="microscope" />
					</span>
					<span className="uppercase">Interesses de Pesquisa</span>
				</label>
				<div className="mt-[15px] flex flex-col gap-y-2 break-words px-0.5 text-justify text-3 font-light leading-relaxed tracking-wide text-gray-500 underline-offset-[6px] dark:text-gray-300 lg:text-[17px]">
					<p>
						Estou interessado tanto nos aspectos teóricos quanto aplicados do aprendizado de máquina e ciência de dados, especialmente seu papel no desenvolvimento de software.
					</p>
					<p>
						Meus objetivos gerais são:
					</p>
					<ul className="mt-2 list-disc pl-5">
						<li className="pl-3">
							Projetar e desenvolver sistemas e protocolos que 							sejam eficientes e fáceis de usar;
						</li>
						<li className="pl-3">
							Supportar a implementação de soluções tecnológicas no mundo real para indivíduos e organizações;
						</li>
						<li className="pl-3">
							Encontrar maneiras novas e inovadoras de aplicar técnicas de aprendizado de máquina na sociedade.
						</li>
					</ul>
				</div>
			</section>
			<section className="mt-14">
				<div className="flex items-center justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="article" />
						</span>
						<span className="hidden uppercase lg:block">Publicações Selecionadas</span>
						<span className="block uppercase lg:hidden">Publicações</span>
					</label>
					<Link
						href="https://github.com/nizpew" // Link para seu GitHub
						target="_blank"
						className="flex items-center gap-x-1 text-gray-500 underline-offset-4 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500">
						GitHub
						<span className="h-5 w-5 underline">
							<Icon name="externalLink" />
						</span>
					</Link>
				</div>
				<div className="mt-5 flex flex-col gap-y-4">
					<PaperCard
						title="Análise de Uso de Aplicativos Móveis e Saúde Mental com Aprendizado de Máquina"
						authors="Sávio Arbuês"
						venue={{
							name: "Repositório do GitHub",
							href: "https://github.com/nizpew/appusage-mentalhealth_data-analisys-with-ML", // Link do seu repositório
						}}
						accepted={false}
						links={[
							{
								href: "https://private-user-images.githubusercontent.com/144165519/382173969-9181ab91-b291-483e-a86f-80760356b75c.png",
								label: "Imagem do projeto",
							},
						]}
					/>
					<PaperCard
						title="Aplicativo de Análise Estática de Código com IA"
						authors="Sávio Arbuês"
						venue={{
							name: "Repositório do GitHub",
							href: "https://github.com/nizpew/AI-code-analysis", // Link do seu repositório
						}}
						accepted={false}
						links={[
							{
								href: "https://private-user-images.githubusercontent.com/144165519/382174537-37d3487a-9978-4a04-a4da-3fbfb41cbacd.png",
								label: "Imagem do projeto",
							},
						]}
					/>
				</div>
			</section>
			<section className="mt-14">
				<div className="flex items-center justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="suitcase" />
						</span>
						<span className="uppercase">Emprego</span>
					</label>
					<Link
						href="https://www.linkedin.com/in/savio-arbues/" // Link para seu LinkedIn
						target="_blank"
						className="flex items-center gap-x-1 text-gray-500 underline-offset-4 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500">
						LinkedIn
						<span className="h-5 w-5 underline">
							<Icon name="externalLink" />
						</span>
					</Link>
				</div>
				<div className="mt-5 flex flex-col gap-y-4">
					<EmploymentCard
						orgLogoSrc="https://static.ouorz.com/your_logo.png" // Substitua pela imagem da sua empresa
						organization="Centro Universitário de Brasília"
						organizationFullName="Bacharel em Ciência de Dados e Aprendizado de Máquina"
												jobTitle="Estudante"
						startDate="2022"
						endDate="Atual"
						description="Atualmente, estou me especializando em ciência de dados e aprendizado de máquina, focando em projetos práticos e pesquisas na área."
					/>
					{/* Adicione mais EmploymentCard se necessário */}
				</div>
			</section>
			<section className="mt-14">
				<div className="flex items-center justify-between">
					<label className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm dark:border-gray-600 dark:bg-gray-700">
						<span className="mr-1.5 flex h-5 w-5">
							<Icon name="edit" />
						</span>
						<span className="uppercase">Blog Posts</span>
					</label>
					<button
						data-cy="showIndexPosts"
						onClick={() => setShowPosts(!showPosts)}
						aria-label="Alternar entre posts e caixa de assinatura"
						className="effect-pressing inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-[4px] font-medium tracking-wider shadow-sm hover:shadow-inner dark:border-gray-600 dark:bg-transparent dark:text-gray-500 dark:hover:bg-gray-800">
						<span
							className={`flex h-5 w-5 duration-200 ${showPosts ? "rotate-180" : "rotate-0"}`}>
							<Icon name="arrowUp" />
						</span>
					</button>
				</div>
				{showPosts ? (
					<div className="mt-5 animate-appear">
						<List type="index" />
					</div>
				) : (
					<div className="mt-5">
						<SubscriptionBox type="sm" />
					</div>
				)}
			</section>
		</>
	)
}

Home.layout = pageLayout

export default Home
