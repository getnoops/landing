import Layout from "@theme/Layout";
import { Footer, Hero, TopBar } from "../components";
import { AwsManaged } from "../content/AwsManaged";
import { Environment } from "../content/Environment";
import { Streamline } from "../content/Streamline";
import { YourTech } from "../content/YourTech";

export default () => {
	return (
		<Layout title="Hello" description="Hello React Page">
			<div className="bg-noops-50">
				<TopBar />

				<Hero />

				<AwsManaged />

				<Streamline />

				<YourTech />

				<Environment />

				<Footer />
			</div>
		</Layout>
	);
};
