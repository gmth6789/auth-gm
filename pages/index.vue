<template>
  <div class="grid">
    <div class="col-12">
      <Card class="text-center">
        <template #title>
          Welcome, anonym user. You need to sign in for access to private area.
        </template>
        <template #footer>
          <NuxtLink to="/login">
            <Button label="ไปที่หน้าล็อคอิน" />
          </NuxtLink>
        </template>
      </Card>
    </div>
  </div>
</template>
