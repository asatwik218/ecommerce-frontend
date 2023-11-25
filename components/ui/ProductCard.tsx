"use client";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

type ProductCardProps = {
	data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
	const router = useRouter();
	const previewModal = usePreviewModal();
	const cart = useCart();
	const handleClick = () => {
		router.push(`/product/${data.id}`);
	};

	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		cart.addItem(data);
	};
	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		previewModal.onOpen(data);
	};
	return (
		<div
			onClick={handleClick}
			className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
		>
			<div className='aspect-square rounded-xl bg-gray-100 relative'>
				<Image
					className='aspect-square object-cover rounded-md'
					src={data?.images?.[0]?.url}
					alt='Image'
					fill
				/>
				<div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
					<div className=' flex gap-x-6 justify-center'>
						<IconButton
							onClick={onPreview}
							icon={<Expand size={20} className='text-gray-600' />}
						/>
						<IconButton
							onClick={onAddToCart}
							icon={<ShoppingCart size={20} className='text-gray-600' />}
						/>
					</div>
				</div>
			</div>
			{/* description */}
			<div>
				<p className='font-semibold text-lg'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category.name}</p>
			</div>
			<div className='flex items-center justify-between'>
				<Currency value={data.price} />
			</div>
		</div>
	);
};

export default ProductCard;
