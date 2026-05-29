
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/aboutus" | "/donate" | "/gallery" | "/volunteer";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/aboutus": Record<string, never>;
			"/donate": Record<string, never>;
			"/gallery": Record<string, never>;
			"/volunteer": Record<string, never>
		};
		Pathname(): "/" | "/aboutus" | "/donate" | "/gallery" | "/volunteer";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/img/animalrescue.jpeg" | "/img/banner1.jpeg" | "/img/group1.jpeg" | "/img/group2.jpeg" | "/img/group3.jpeg" | "/img/group4.jpeg" | "/img/group5.jpeg" | "/img/group6.jpeg" | "/img/group7.jpeg" | "/img/group8.jpg" | "/img/heroBg.jpg" | "/img/img1.jpeg" | "/img/img10.jpeg" | "/img/img11.jpeg" | "/img/img12.jpeg" | "/img/img13.jpeg" | "/img/img14.jpeg" | "/img/img15.jpeg" | "/img/img16.jpeg" | "/img/img17.jpeg" | "/img/img18.jpeg" | "/img/img19.jpeg" | "/img/img2.jpeg" | "/img/img20.jpeg" | "/img/img21.jpeg" | "/img/img22.jpeg" | "/img/img23.jpg" | "/img/img24.jpg" | "/img/img25.jpg" | "/img/img26.jpg" | "/img/img27.jpg" | "/img/img28.jpg" | "/img/img3.jpeg" | "/img/img4.jpeg" | "/img/img5.jpeg" | "/img/img6.jpeg" | "/img/img7.jpeg" | "/img/img8.jpeg" | "/img/img9.jpeg" | "/img/logo.jpeg" | "/img/maingroup.jpeg" | "/img/upi.jpeg" | string & {};
	}
}