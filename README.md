# Playwright E2E - Prova 03

Testes de ponta a ponta (E2E) desenvolvidos com [Playwright](https://playwright.dev/) em TypeScript utilizando o padrão Page Object Model (POM) para o site [365Scores](https://www.365scores.com/pt-br).

## GitHub Actions + SonarCloud

[![Build and Tests](https://github.com/arthurlockss/prova03-playwright-e2e-ArthurLocksGrassi/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/arthurlockss/prova03-playwright-e2e-ArthurLocksGrassi/actions/workflows/node.js.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arthurlockss_prova03-playwright-e2e-ArthurLocksGrassi&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=arthurlockss_prova03-playwright-e2e-ArthurLocksGrassi)

---

## 🎯 Casos de Teste (365Scores)

O projeto contém 3 casos de teste automatizados cobrindo fluxos essenciais da aplicação:

1. **CT01 - Validação da Home e Componentes Principais:**
   - Acesso à página inicial (`/pt-br`).
   - Validação da URL, título, exibição do cabeçalho, logotipo oficial e modalidades esportivas (como Futebol).
2. **CT02 - Navegação por Modalidade Esportiva:**
   - Navegação direta para a seção de **Basquete** a partir do menu principal de esportes.
   - Validação da alteração de rota para `/basketball`.
3. **CT03 - Busca de Clube Esportivo:**
   - Abertura do campo de busca no cabeçalho.
   - Preenchimento do termo de pesquisa (ex: **Flamengo**).
   - Validação dinâmica dos resultados e sugestões exibidos contendo o clube e esporte.

---

## 🚀 Como Executar Localmente

Siga os passos abaixo para configurar e rodar os testes:

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Instalar Navegadores do Playwright:**
   ```bash
   npx playwright install chromium
   ```

3. **Executar os Testes E2E:**
   ```bash
   npm test
   ```

4. **Executar com Interface Gráfica (UI):**
   ```bash
   npm run ui
   ```

5. **Visualizar Relatório de Execução (HTML Report):**
   ```bash
   npm run show-report
   ```

---

## 🏗️ Estrutura do Projeto

O projeto adota o padrão Page Object Model (POM) segregado em camadas:

- **`src/scenarios/`**: Mapeamento dos cenários de teste (`Scores365.spec.ts`).
- **`src/support/`**:
  - **`elements/`**: Mapeamento resiliente de seletores e locators (`Scores365Elements.ts`, `BaseElements.ts`).
  - **`pages/`**: Ações, lógica de negócio e asserções web-first (`Scores365Page.ts`, `BasePage.ts`).
  - **`fixtures/`**: Configurações de ambiente e URLs (`config.yml`).
- **`.github/workflows/`**: Pipeline de CI/CD automatizada com GitHub Actions e SonarCloud.
- **`sonar-project.properties`**: Configurações de análise estática e qualidade de código com SonarCloud.
