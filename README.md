# Joke-react-API

## Описание проекта
Joke-react-API - это веб-приложение, созданное с использованием фреймворка React, которое позволяет пользователям создавать, отправлять и получать шутки через сервер Firebase Realtime Database.

## Основные функции
- Создание и отправка шуток на сервер Firebase Realtime Database.
- Получение шуток с сервера Firebase Realtime Database.

Технологии:
- React
- Firebase Realtime Database

В проекте были использованы хуки React, такие как **useState**, **useEffect** и **useCallback**. Хук **useState** использовался для управления состоянием формы создания новой шутки, а хук **useEffect** - для запроса данных с сервера Firebase и обновления списка шуток при изменении базы данных. Хук **useCallback** использовался для оптимизации производительности компонента, который отображает список шуток.

## Создание шутки
![Создание шутки](/src/screenshots/addJoke.png)

## Получение шутки
![Получение шутки](/src/screenshots/fetchJoke.png)

Для просмотра проекта перейдите по ссылке: https://iuliiausatova.github.io/Joke-react-API/