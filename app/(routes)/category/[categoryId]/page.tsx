import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSingleCategory from "@/actions/get-single-category";
import getSizes from "@/actions/get-sizes";
import Filter from "@/components/Filter";
import MobileFilter from "@/components/MobileFilter";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";

import React from "react";

export const revalidate = 0;

type CategoryPageProps = {
	params: {
		categoryId: string;
	};
	searchParams: {
		colorId: string;
		sizeId: string;
	};
};

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
	const { categoryId } = params;
	const { colorId, sizeId } = searchParams;

	const products = await getProducts({
		categoryId,
		colorId,
		sizeId,
	});

	const sizes = await getSizes();
	const colors = await getColors();
	const category = await getSingleCategory(categoryId);

	return (
		<div className='bg-white'>
			<Container>
				{/* <Billboard data={category.billboard} /> */}
				<div className='px-4 sm:px-6 lg:px-8 pb-24'>
					<div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
						{/* add mobile filters */}
						<MobileFilter sizes={sizes} colors={colors} />
						<div className='hidden lg:block'>
							<Filter valueKey='sizeId' name='Sizes' data={sizes} />
							<Filter valueKey='colorId' name='Colors' data={colors} />
						</div>
						<div className='mt-6 lg:col-span-4 lg:mt-8'>
							{products.length == 0 && <NoResults />}
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
								{products.map((product) => (
									<ProductCard data={product} key={product.id} />
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CategoryPage;
