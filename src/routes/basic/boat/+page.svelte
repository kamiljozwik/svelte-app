<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>{data.boatName}</h1>

<!-- use:enhance użyje JS do wysłania formularza, więc nie będzie pełnego przeładowania strony. Bez JS w przeglądarce też zadziała. 
Z pomocą "enhance" możemy również zrobić walidację formularza, mieć dostęp do danych z formularza, statusu, błędów po stronie klienta.
-->
<form method="POST" action="?/rename" use:enhance> <!-- używamy konkretnej akcji na BE -->
    <input type="text" name="boatName" />
    <button type="submit">Submit</button>

    <button formaction="?/capitalize">Capitalize</button> <!-- używamy konkretnej akcji na BE -->
</form>