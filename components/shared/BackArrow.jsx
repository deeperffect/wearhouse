import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackArrow = () => {
	const router = useRouter();
  return (
	<div className="p-2 sticky top-headerHeight lg:hidden">
		<button onClick={() => router.back()}>
				<Image src="/assets/icons/back-arrow.svg" alt='back arrow' width={32} height={32}/>
		</button>
	</div>
  )
}

export default BackArrow;