
## 2. Suma dos números



## Descripción
Se le proporcionan dos listas enlazadas no vacías que representan dos enteros 
no negativos. Los dígitos se almacenan en orden inverso y cada uno de sus nodos
contiene un solo dígito. Suma los dos números y devuelve la suma como una lista enlazada.

Puede suponer que los dos números no contienen ningún cero a la izquierda, excepto el número 0 en sí.

 
 - **Ejemplo 1:**

<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

- **Ejemplo 2:**

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>


- **Ejemplo 3:**

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

Restricciones:

```bash
El número de nodos de cada lista enlazada está en el intervalo .[1, 100]
0 <= Node.val <= 9
Se garantiza que la lista representa un número que no tiene ceros a la izquierda.
 ```
