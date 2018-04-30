import androidappActivity = android.app.Activity;
import androidosBundle = android.os.Bundle;
declare module com {
	export module wonderpush {
		export module sdk {
			export class ActivityLifecycleMonitor {
				public static getCurrentActivity(): androidappActivity;
				public static addTrackedActivity(param0: androidappActivity): void;
				public static getLastStoppedActivity(): androidappActivity;
				public static monitorActivitiesLifecycle(): void;
			}
			export module ActivityLifecycleMonitor {
				export class Monitor {
					public getStartFirstDate(): number;
					public hasCreatedActivities(): boolean;
					public getLastResumedActivity(): androidappActivity;
					public getCreateFirstDate(): number;
					public onActivityCreated(param0: androidappActivity, param1: androidosBundle): void;
					public getLastStoppedActivity(): androidappActivity;
					public getResumeFirstDate(): number;
					public onActivityStarted(param0: androidappActivity): void;
					public getStopLastDate(): number;
					public onActivityResumed(param0: androidappActivity): void;
					public hasStartedActivities(): boolean;
					public onActivityDestroyed(param0: androidappActivity): void;
					public getPausedLastDate(): number;
					public getDestroyLastDate(): number;
					public onActivityPaused(param0: androidappActivity): void;
					public onActivityStopped(param0: androidappActivity): void;
					public hasResumedActivities(): boolean;
					public onActivitySaveInstanceState(param0: androidappActivity, param1: androidosBundle): void;
				}
			}
		}
	}
}
