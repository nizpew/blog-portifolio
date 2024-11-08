import Nexment from "nexment"
import { useRouter } from "next/router"

const NexmentComponent = () => {
	const { query } = useRouter()
	const pageKey = query.pid ?? query.pgid

	const config = {
		pageKey: pageKey as string,
		features: {
			linkInput: true,
			replyListModal: true,
			replyEmailNotifications: true,
			descriptionTag: true,
		},
		leancloud: {
			appId: process.env.NEXT_PUBLIC_LC_ID,
			appKey: process.env.NEXT_PUBLIC_LC_KEY,
			serverURL: "https://ouorz-nexment.ouorz.com",
		},
		admin: {
			name: "TonyHe",
			email: "tony.hlp@hotmail.com",
		},
		blackList: [
			{
				name: "快递",
				keyword: "代发",
				link: "88danhaowang.com",
				email: "461646@qq.com",
			},
			{
				name: "rthj",
				keyword: "单号",
				link: "dh5u.com",
			},
			{
				keyword: "快递",
			},
			{
				keyword: "空包",
			},
			{
				keyword: "快递",
			},
			{
				keyword: "快发",
			},
			{
				keyword: "快单",
			},
			{
				keyword: "一毛钱",
			},
		],
	}

	if (
		process.env.NEXT_PUBLIC_LC_ID &&
		process.env.NEXT_PUBLIC_LC_KEY &&
		pageKey
	) {
		return <Nexment config={config} />
	}

	return null
}

export default NexmentComponent
