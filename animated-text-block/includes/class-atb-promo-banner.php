<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\atb_PromoBanner' ) ) {

    class atb_PromoBanner {

        const DISMISSED_KEY   = 'atb_promo_banner_dismissed_permanent';
        const EXPIRATION_DATE = '2026-12-05 23:59:59';

        /** Target landing URL */
        const COUPON_URL = 'https://bplugins.com/products/animated-text-block/pricing/?utm_source=admin&utm_medium=dashboard&utm_campaign=bfcm2026';

        public function __construct() {
            add_action( 'admin_notices', [ $this, 'render' ] );
            add_action( 'admin_head', [ $this, 'enqueue_styles' ] );
            add_action( 'admin_footer', [ $this, 'enqueue_scripts' ] );
        }

        /* ------------------------------------------------------------------ */
        /* Screen, Expiration, Dismissal & Pro Helpers                        */
        /* ------------------------------------------------------------------ */

        /**
         * Check if the current admin screen belongs to Animated Text Block.
         */
        private function is_plugin_screen(): bool {

            $screen = get_current_screen();

            if ( $screen ) {

                $id        = $screen->id ?? '';
                $base      = $screen->base ?? '';
                $post_type = $screen->post_type ?? '';

                if (
                    strpos( $id, 'animated-text-block' ) !== false ||
                    strpos( $base, 'animated-text-block' ) !== false ||
                    $post_type === 'animated-text-block'
                ) {
                    return true;
                }
            }

            if ( isset( $_GET['page'] ) ) {

                $page = sanitize_key( wp_unslash( $_GET['page'] ) );

                if ( strpos( $page, 'atb' ) !== false ) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Check if current date is past December 5, 2026.
         */
        private function is_expired(): bool {

            $expiry_timestamp = strtotime( self::EXPIRATION_DATE );
            $current_time     = current_time( 'timestamp' );

            return ( $current_time > $expiry_timestamp );
        }

        /**
         * Determine if the banner should be omitted.
         */
        private function should_skip(): bool {

            // 1. Only show inside Animated Text Block admin screens.
            if ( ! $this->is_plugin_screen() ) {
                return true;
            }

            // 2. Automatically remove after December 5, 2026.
            if ( $this->is_expired() ) {
                return true;
            }

            // 3. Premium check: hardcoded false for the Free version.
            $is_premium = false;

            if ( $is_premium ) {
                return true;
            }

            return false;
        }

        /* ------------------------------------------------------------------ */
        /* CSS Styles                                                         */
        /* ------------------------------------------------------------------ */

        public function enqueue_styles(): void {

            if ( $this->should_skip() ) {
                return;
            }
            ?>

            <style id="atb-promo-banner-css">

            #atb-promo-banner {
                --bpl-primary: #146ef5;
                --bpl-primary-hover: #0d5ecc;
                --bpl-secondary: #ff7a00;
                --bpl-dark: #070127;
                --bpl-text: #1b2e4b;
                --bpl-muted: #475569;

                background: #ffffff;
                border: 1px solid #cbd5e1;
                border-radius: 8px;
                box-shadow: 0 3px 12px rgba(7, 1, 39, 0.05);
                display: flex !important;
                align-items: stretch;
                min-height: 84px;
                overflow: hidden;
                position: relative;
                margin: 14px 0 16px 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                box-sizing: border-box;
                animation: atbBannerSlide .3s ease both;
            }

            @keyframes atbBannerSlide {
                from {
                    opacity: 0;
                    transform: translateY(-6px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Left Brand Ribbon Block */

            #atb-promo-banner .atb-brand-ribbon {
                width: 140px;
                min-width: 140px;
                background: #393CA3;
                color: #ffffff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 12px 10px;
                gap: 6px;
                flex-shrink: 0;
            }

            #atb-promo-banner .atb-brand-ribbon img {
                width: 70px;
                height: 70px;
                object-fit: contain;
                filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.35));
            }

            #atb-promo-banner .atb-brand-ribbon .atb-ribbon-title {
                font-size: 10.5px;
                font-weight: 800;
                letter-spacing: .7px;
                text-transform: uppercase;
                color: #ffffff;
                text-align: center;
                line-height: 1.2;
            }

            /* Main Content Zone */

            #atb-promo-banner .atb-content-zone {
                flex: 1;
                padding: 14px 22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                flex-wrap: wrap;
                padding-right: 38px;
            }

            /* Left Text Stack */

            #atb-promo-banner .atb-text-stack {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            #atb-promo-banner .atb-headline {
                font-size: 14px;
                font-weight: 700;
                color: var(--bpl-dark);
                display: flex;
                align-items: center;
                gap: 8px;
                margin: 0;
                line-height: 1.3;
            }

            #atb-promo-banner .atb-discount-chip {
                background: #ffedd5;
                color: #c2410c;
                border: 1px solid #fed7aa;
                font-size: 11px;
                font-weight: 700;
                padding: 2px 8px;
                border-radius: 12px;
                letter-spacing: .2px;
            }

            /* Feature Checklist */

            #atb-promo-banner .atb-feature-chips {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 12px;
                color: var(--bpl-muted);
                flex-wrap: wrap;
            }

            #atb-promo-banner .atb-feature-chips span {
                display: inline-flex;
                align-items: center;
                gap: 4px;
            }

            #atb-promo-banner .atb-feature-chips .check-icon {
                color: #10b981;
                font-weight: 800;
            }

            /* CTA Action Button */

            #atb-promo-banner .atb-btn-cta {
                background: var(--bpl-primary);
                color: #ffffff !important;
                padding: 9px 20px;
                border-radius: 5px;
                font-size: 12.5px;
                font-weight: 600;
                text-decoration: none !important;
                box-shadow: 0 2px 8px rgba(20, 110, 245, 0.32);
                transition: background-color .15s ease, transform .15s ease, box-shadow .15s ease;
                white-space: nowrap;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }

            #atb-promo-banner .atb-btn-cta:hover {
                background: var(--bpl-primary-hover);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(20, 110, 245, 0.45);
            }

            /* Dismiss Button */

            #atb-promo-banner .atb-banner-dismiss-btn {
                position: absolute;
                top: 8px;
                right: 8px;
                background: none;
                border: none;
                cursor: pointer;
                color: #94a3b8;
                font-size: 20px;
                line-height: 1;
                padding: 6px;
                transition: color .15s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
            }

            #atb-promo-banner .atb-banner-dismiss-btn:hover {
                color: var(--bpl-dark);
            }

            /* Responsive */

            @media (max-width: 960px) {
                #atb-promo-banner .atb-brand-ribbon {
                    width: 110px;
                    min-width: 110px;
                }
            }

            @media (max-width: 782px) {

                #atb-promo-banner {
                    flex-direction: column;
                    align-items: stretch;
                }

                #atb-promo-banner .atb-brand-ribbon {
                    width: 100%;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 8px 16px;
                }

                #atb-promo-banner .atb-content-zone {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 14px 16px;
                }
            }

            </style>

            <?php
        }

        /* ------------------------------------------------------------------ */
        /* Permanent Dismiss Script                                           */
        /* ------------------------------------------------------------------ */

        public function enqueue_scripts(): void {

            if ( $this->should_skip() ) {
                return;
            }
            ?>

            <script id="atb-promo-banner-js">

            (function () {

                var storageKey = <?php echo wp_json_encode( self::DISMISSED_KEY ); ?>;

                var banner = document.getElementById('atb-promo-banner');
                var btn = document.getElementById('atb-banner-close');

                if (!banner) return;

                // Hide banner if dismissed in this browser.
                try {

                    if (window.localStorage.getItem(storageKey) === '1') {
                        banner.remove();
                        return;
                    }

                } catch (error) {
                    // Keep banner functional if localStorage is unavailable.
                }

                if (!btn) return;

                btn.addEventListener('click', function(e) {

                    e.preventDefault();

                    // Save dismissal in this browser.
                    try {

                        window.localStorage.setItem(storageKey, '1');

                    } catch (error) {
                        // Banner will still close for current page.
                    }

                    banner.style.transition = 'opacity .25s ease, transform .25s ease';
                    banner.style.opacity = '0';
                    banner.style.transform = 'translateY(-6px)';

                    setTimeout(function() {
                        banner.remove();
                    }, 260);

                });

            })();

            </script>

            <?php
        }

        /* ------------------------------------------------------------------ */
        /* Render Single Banner                                               */
        /* ------------------------------------------------------------------ */

        public function render(): void {

            if ( $this->should_skip() ) {
                return;
            }

            $coupon_url = esc_url( self::COUPON_URL );

            $icon_svg = 'https://ps.w.org/animated-text-block/assets/icon.svg?rev=3623192';

          

            ?>

            <div id="atb-promo-banner">

                <!-- Left Brand Ribbon -->

                <div class="atb-brand-ribbon">

                    <img
                        src="<?php echo esc_attr( $icon_svg ); ?>"
                        alt="<?php esc_attr_e( 'Animated Text Block', 'animated-text-block' ); ?>"
                    />

                    <span class="atb-ribbon-title">
                        Animated Text Block 
                    </span>

                </div>

                <!-- Main Content Zone -->

                <div class="atb-content-zone">

                    <div class="atb-text-stack">

                        <div class="atb-headline">

                            <span>
                                <?php esc_html_e( ' Animated Text Block Biggest Black Friday Sale Is Live – Save Up to 45%!', 'animated-text-block' ); ?>
                            </span>
                            

                           

                        </div>
                        <div>
    <span>
        <?php esc_html_e( 'Create stunning animated text with powerful effects and make your content stand out!', 'animated-text-block' ); ?>
    </span>
</div>

                        <div class="atb-feature-chips">

                            <span>
                                <strong class="check-icon">✓</strong>
                                <?php esc_html_e( 'Premium Animation Effects', 'animated-text-block' ); ?>
                            </span>

                            <span>
                                <strong class="check-icon">✓</strong>
                                <?php esc_html_e( 'Advanced Text Styles', 'animated-text-block' ); ?>
                            </span>

                            <span>
                                <strong class="check-icon">✓</strong>
                                <?php esc_html_e( 'Highlight & Scroll Effects', 'animated-text-block' ); ?>
                            </span>

                            <span>
                                <strong class="check-icon">✓</strong>
                                <?php esc_html_e( 'Priority Support', 'animated-text-block' ); ?>
                            </span>

                        </div>

                    </div>

                    <!-- CTA Button -->

                    <a
                        href="<?php echo $coupon_url; ?>"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="atb-btn-cta"
                    >
                        <?php esc_html_e( 'Unlock PRO Features →', 'animated-text-block' ); ?>
                    </a>

                </div>

                <!-- Dismiss Button -->

                <button
                    id="atb-banner-close"
                    class="atb-banner-dismiss-btn"
                    title="<?php esc_attr_e( 'Dismiss', 'animated-text-block' ); ?>"
                    aria-label="<?php esc_attr_e( 'Dismiss banner', 'animated-text-block' ); ?>"
                    type="button"
                >
                    &times;
                </button>

            </div>

            <?php
        }
    }

    new atb_PromoBanner();
}
