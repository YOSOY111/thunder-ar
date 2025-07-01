document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            alert(`Producto ${productId} agregado al carrito!`);

            // --- ¡AQUÍ ESTÁ LA MAGIA FUTURA! ---
            // En una tienda real, este código no mostraría una alerta.
            // En su lugar, haría una de estas cosas:
            // 1. Llamar a una API de un carrito de compras (como Shopify Buy Button).
            // 2. Redirigir a una página de pago (como un link de Stripe Checkout).
            // 3. Agregar el producto a un objeto de carrito local y actualizar la UI.
        });
    });
});
