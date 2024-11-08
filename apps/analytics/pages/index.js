import Link from "next/link"
import Layout from "components/layout/Layout"
import Page from "components/layout/Page"

export default function DefaultPage() {
	return (
		<Layout>
			<Page>
				<h3 style={{ textAlign: "center", margin: "0 0 20px" }}>
					<b>
						Privacy-preserving website analytics service for&nbsp;
						<a href="https://lipeng.ac">Tony</a>&apos;s projects.
					</b>
				</h3>
				<br />
				<div style={{ padding: "0px 20px" }}>
					<h3>
						<b>Features</b>
					</h3>
					<ul>
						<li>
							<b>GDPR</b> compliant - Data stored in EU (Frankurt, Germany)
						</li>
						<li>
							Respect visitors&apos; <b>Do Not Track</b> setting
						</li>
						<li>Event and page view tracking through:</li>
						<ul>
							<li>
								<b>[data-oa]</b> attribute
							</li>
							<li>JavaScript</li>
						</ul>
						<li>Realtime data monitoring</li>
					</ul>
					<br />
					<h3>
						<b>Third-Party Service Providers</b>
					</h3>
					<ul>
						<li>
							Tracking Code/Dashboard Hosting:&nbsp;
							<a
								href="https://vercel.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vercel
							</a>
						</li>
						<li>
							PostgreSQL Database:&nbsp;
							<a
								href="https://supabase.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Supabase
							</a>
						</li>
						<li>
							DNS:&nbsp;
							<a
								href="https://cloudflare.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								CloudFlare
							</a>
						</li>
					</ul>
					<br />
					<h3>
						<b>Entries</b>
					</h3>
					<ul>
						<li>
							<Link href="/dashboard">Dashboard →</Link>
						</li>
						<li>
							<a
								href="https://github.com/ttttonyhe/ouorz-mono/tree/main/apps/analytics"
								target="_blank"
								rel="noopener noreferrer"
							>
								Open Source →
							</a>
						</li>
					</ul>
				</div>
			</Page>
		</Layout>
	)
}
