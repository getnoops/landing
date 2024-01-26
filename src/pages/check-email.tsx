import Layout from "@theme/Layout";
import { EmailQuickLinks, Footer, TopBar } from "../components";

export default () => {
	return (
		<Layout title="Check your Email">
			<div className="bg-noops-50">
				<TopBar />

				<div className="bg-noops-1000">
					<div className="relative isolate pt-10">
						<div className="relative mx-auto max-w-7xl p-8 pb-40 pt-28">
							<EmailQuickLinks />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</Layout>
	);
};
