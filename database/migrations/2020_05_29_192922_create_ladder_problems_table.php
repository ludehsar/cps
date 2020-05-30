<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLadderProblemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ladder_problems', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ladder_id')->constrained();
            $table->string('problem_title');
            $table->string('problem_url');
            $table->string('online_judge');
            $table->string('problem_difficulty');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ladder_problems');
    }
}
