import { useTranslation } from '../../../i18n'
import { useAppSettingStore } from '../../../store/app-setting'
import { Frame, FrameHeader, FramePanel, FrameTitle } from '../../ui/frame'
import { FrameDescription } from '../../ui/frame'
import { Switch } from '../../ui/switch'

export function PrivacySettings() {
	const { t } = useTranslation()
	const analyticsEnabled = useAppSettingStore((state) => state.analyticsEnabled)
	const setAnalyticsEnabled = useAppSettingStore(
		(state) => state.setAnalyticsEnabled
	)

	return (
		<Frame>
			<FrameHeader>
				<FrameTitle>{t('settings.general.privacy.title')}</FrameTitle>
			</FrameHeader>
			<FramePanel>
				<div className="flex items-center justify-between gap-4">
					<div className="flex-1">
						<FrameTitle>
							{t('settings.general.privacy.analytics.label')}
						</FrameTitle>
						<FrameDescription>
							{t('settings.general.privacy.analytics.description')}
						</FrameDescription>
					</div>
					<Switch
						checked={analyticsEnabled}
						onCheckedChange={setAnalyticsEnabled}
					/>
				</div>
			</FramePanel>
		</Frame>
	)
}
