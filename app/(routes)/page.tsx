import React from "react";

import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard("a5a0397a-738a-4a6c-9ad8-25778d377b7d");

	const products = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
				<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
