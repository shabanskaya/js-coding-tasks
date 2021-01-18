Проверьте, имеет ли строка одинаковое количество " x " и "o". Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любой символ.  

**Ожидаемые input/output:**
- XO("ooxx") => true
- XO("xooxx") => false
- XO("ooxXm") => true
- XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
- XO("zzoo") => false